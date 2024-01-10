from rest_framework import generics,mixins
from django.shortcuts import get_object_or_404
from .models import Shoe,Category
from .serializers import ShoeSerializer,categorySerializer
 

class LatestShoesAPIView(generics.ListAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer

lataest_shoes_api_list = LatestShoesAPIView.as_view()

class ShoeDetailAPIView(generics.RetrieveAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
    lookup_field = 'slug'

shoe_detail_api_view = ShoeDetailAPIView.as_view()


class CategoriesListAPIVeiw(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = categorySerializer

Categories_List_Veiw = CategoriesListAPIVeiw.as_view()    

class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = categorySerializer
    lookup_field = 'slug'

category_detail_api_view = CategoryDetailAPIView.as_view()