from django.urls import path

from . import views


urlpatterns = [
    path('cart/',views.CartAPIView.as_view(),name='cart'),
    # path('create-checkout-session/',views.createCheckoutSessionView.as_view(),name='create-checkout-session'),
    # path('test/',views.process_payment)
]