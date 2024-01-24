from rest_framework.views import APIView
from rest_framework import generics,permissions
# from django.contrib import settings

from shoes.models import Shoe

class createCheckoutStripeSession(generics.RetrieveAPIView):

    def post(self,request, *args, **kwargs):

        slug = self.kwargs = 'slug'
        shoe  = self