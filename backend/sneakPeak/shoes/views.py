from rest_framework import generics,mixins

from .models import Shoe
from .serializers import ShoeSerializer
class ShoeDetailAPIView(generics.RetrieveAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer


shoe_detail_api_view = ShoeDetailAPIView.as_view()