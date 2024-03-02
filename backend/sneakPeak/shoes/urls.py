from django.urls import path 

from . import views 

urlpatterns = [
    
    path('categories/<slug:category_slug>/<slug:slug>/',views.shoe_detail_api_view,name="shoe-detail"),
    path('categories/<slug:slug>/',views.category_details_api_view,name='category-detail'),
    path('categories/',views.Categories_List_Veiw,name='category-list'),
    path('search/',views.shes_search_api_view,name='search'),
    path('latest/',views.lataest_shoes_api_list,name='shoe-list'),
    path('brands/<slug:brand_slug>/',views.brands_products_api_view,name='brand-detail'),
    path('brands/',views.brands_list_api_view,name = 'brand-list'),
    path('categories/<slug:category_slug>/<slug:slug>/colors/',views.color_size_shoe_api_view,name='colorshoe-detail'),
    path('<slug:tag_slug>/',views.tag_shoes_api_view,name='tag-detail'),
    path('',views.home_page,name='home'),
 
    




]