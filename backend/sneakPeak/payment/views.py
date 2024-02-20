# from rest_framework.views import APIView,Response
# from rest_framework import generics,permissions,status
# from shoes.models import Shoe,ShoeColor,ShoeSize
# from django.shortcuts import redirect
# from rest_framework.decorators import api_view
# from django.core.exceptions import ObjectDoesNotExist
# # from django.shortcuts import get_or_create
# import stripe
# from django.conf import settings

# from django.views import View





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