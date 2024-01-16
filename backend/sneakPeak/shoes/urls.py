from django.urls import path 

from . import views 

urlpatterns = [
    path('latest/',views.lataest_shoes_api_list,name='shoe-list'),
    path('search/',views.shes_search_api_view,name='search'),
    path('<slug:category_slug>/<slug:slug>/',views.shoe_detail_api_view,name="shoe-detail"),
    path('',views.Categories_List_Veiw,name='category-list'),
    path('<slug:slug>/',views.category_details_api_view,name='category-detail'),
    path('<slug:category_slug>/<slug:slug>/colors/',views.color_size_shoe_api_view,name='colorshoe-detail'),
    


]