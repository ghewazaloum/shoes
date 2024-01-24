from django.urls import path

from . import views


urlpatterns = [
    path('',views.createCheckoutStripeSession.as_view()),
    
]