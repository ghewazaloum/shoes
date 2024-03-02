from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views


urlpatterns = [
    path('cart/',views.CartAPIView.as_view(),name='cart'),
    path('stripe-webhook/', views.stripe_webhook_view, name='stripe-webhook'),
    path('create-checkout-session/<id>/', csrf_exempt(views.CreateCheckOutSession.as_view()), name='checkout_session')

    # path('create-checkout-session/',views.createCheckoutSessionView.as_view(),name='create-checkout-session'),
    # path('test/',views.process_payment)
]