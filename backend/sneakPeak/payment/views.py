from rest_framework.views import APIView,Response
from rest_framework import generics,permissions,status

from rest_framework.decorators import api_view
from rest_framework import permissions

import stripe
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import HttpResponse

from .models import Cart,CartItem
from .serializers import CartSerializer,CartItemSerializer
from shoes.models import ShoeSize





stripe.api_key = settings.STRIPE_SECRET_KEY

class CartAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request,*args, **kwargs):
        user = request.user
        cart = Cart.objects.filter(client=user)
        if not cart.exists():
            cart =  Cart.objects.none()
        cart = cart.first()
        serializer = CartSerializer(cart)
        return Response({
                'cart_details':serializer.data
            })
    def post(self, request,*args, **kwargs):
        user = request.user
        cart = Cart.objects.filter(client=user)
        if not cart.exists():
            cart = Cart.objects.create(client=user)
            cart.save()
        else:
            cart = cart.first()    
        if "remove" in request.data:
            shoe_id = request.data['id']
            shoe = ShoeSize.objects.get(id=shoe_id)
            item = CartItem.objects.get(cart=cart,shoe=shoe)
            item.delete()
        elif "clear" in request.data:
            cart.delete()
        else:
            shoe_id = request.data['id']
            quantity = request.data['quantity']
            shoe = ShoeSize.objects.get(id=shoe_id)
            cart_item,created = CartItem.objects.get_or_create(cart=cart,shoe=shoe)
            print(cart_item.quantity)
            cart_item.quantity = cart_item.quantity + int(quantity)
            cart_item.save()
        return Response({
            'msg':'Cart updated'
        },status=status.HTTP_200_OK)



class CreateCheckOutSession(APIView):
    def post(self, request, *args, **kwargs):
        cart_id=self.kwargs["id"]
        try:
            cart=Cart.objects.get(id=cart_id)
            cart_items = CartItem.objects.filter(cart=cart)
            items = CartItemSerializer(cart_items,many=True).data
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                       
                        'price_data': {
                            'currency':'usd',
                             'unit_amount':int(cart.total_price) * 100,
                             'product_data':{
                                 'products':items,
                                 

                             }
                        },
                        
                    },
                ],
                metadata={
                    "cart_id":cart.id
                },
                mode='payment',
                success_url=settings.SITE_URL + '?success=true',
                cancel_url=settings.SITE_URL + '?canceled=true',
            )
            return redirect(checkout_session.url)
        except Exception as e:
            return Response({'msg':'something went wrong while creating stripe session','error':str(e)}, status=500)


@csrf_exempt
def stripe_webhook_view(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
        payload, sig_header, settings.STRIPE_SECRET_WEBHOOK
        )
    except ValueError as e:
        # Invalid payload
        return Response(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return Response(status=400)

    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']

        print(session)
        customer_email=session['customer_details']['email']
        cart_id=session['metadata']['cart_id']
        cart=Cart.objects.get(id=cart_id)
        #sending confimation mail
        send_mail(
            subject="payment sucessful",
            message=f"thank for your purchase your order is ready.  download url {cart.book_url}",
            recipient_list=[customer_email],
            from_email="sneakpeakofficail@gamil.com"
        )

        #creating payment history
        # user=User.objects.get(email=customer_email) or None

        PaymentHistory.objects.create(product=cart, payment_status=True)
    # Passed signature verification
    return HttpResponse(status=200)