from rest_framework import generics,mixins
from rest_framework import filters


from .models import Shoe,Category,ShoeColor
from .serializers import ShoeSerializer,categorySerializer,colorShoeSerializer
 

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

class CategoryShoesAPIView(generics.ListAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
    lookup_field = 'slug'
    lookup_url_kwarg  = 'slug'
    def get_queryset(self,*args, **kwargs):
        slug = self.kwargs.get(self.lookup_url_kwarg)
        category = Category.objects.get(slug=slug)
        filtered_qs = Shoe.objects.filter(category=category)
        if not filtered_qs.exists():
            return Shoe.objects.none()
        return filtered_qs
        

category_details_api_view = CategoryShoesAPIView.as_view()


class ColorSizeShoeAPIView(generics.ListAPIView):
    queryset = ShoeColor.objects.all()
    serializer_class =  colorShoeSerializer
    lookup_field = 'shoe'
    lookup_url_kwarg = 'slug'
    def get_queryset(self):
        slug = self.kwargs.get(self.lookup_url_kwarg)
        print(slug)
        shoe = Shoe.objects.get(slug=slug)
        filtered = ShoeColor.objects.filter(shoe=shoe)
        if not filtered.exists():
            return ShoeColor.objects.none()
        return filtered
  

color_size_shoe_api_view = ColorSizeShoeAPIView.as_view()


class ShoesSearchAPIView(generics.ListAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
    filter_backends =[filters.SearchFilter]
    search_fields = ['name','slug','category__name','category__slug']

shes_search_api_view = ShoesSearchAPIView.as_view()