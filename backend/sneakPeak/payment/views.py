from rest_framework.views import APIView,Response
from rest_framework import generics,permissions,status
# from shoes.models import Shoe,ShoeColor,ShoeSize
# from django.shortcuts import redirect
from rest_framework.decorators import api_view
from rest_framework import permissions
# from django.core.exceptions import ObjectDoesNotExist
# # from django.shortcuts import get_or_create
# import stripe
from django.conf import settings

# from django.views import View


from .models import Cart,CartItem
from .serializers import CartSerializer
from shoes.models import ShoeSize
# class createCheckoutSessionView(APIView):

#     def post(self,request, *args, **kwargs):
#         try:
#             checkout_session = stripe.checkout.Session.create(
#                 line_items=[
#                     {
#                         # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
#                         'price': 'price_1Oj7HHKQB9oTuSLvYXLilPH3',
#                         'quantity': 1,
#                     },
#                      print(settings.SITE_URL)
#                 ],
#                 payment_method_types=['card',],
#                 mode='payment',
#                 success_url=settings.SITE_URL + '/?success=true&session_id={CHECKOUT_SESSION_ID}',
#                 cancel_url=settings.SITE_URL + '/?canceled=true',
#             )
#             return Response({'t':'1'})            
#         except:
#             return Response({
#             'error':'Something went wrong when creating stripe checkout session'}
#             ,status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )


# @api_view(['POST'])
# def process_payment(request):
#     # token = request.data.get('stripeToken')
#     amount = request.data.get('amount')  # Amount in cents
#     # description = request.data.get('description')

#     try:
#         charge = stripe.Charge.create(
#             amount=amount,
#             currency='usd',
#             # description=description,
#             # source=token,
#         )
#         # Handle successful payment (e.g., create order, send confirmation email)
#         return Response({'success': True})
#     except stripe.error.StripeError as e:
#         # Handle error
#         return Response({'error': str(e)}, status=400)

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

