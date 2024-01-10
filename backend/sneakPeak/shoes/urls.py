from django.urls import path 

from . import views 

urlpatterns = [
    path('latest/',views.lataest_shoes_api_list,name='shoes-list'),
    path('<slug:Category_slug>/<slug:slug>/',views.shoe_detail_api_view,name="shoe-datails"),
    path('',views.Categories_List_Veiw,name='catigories-list'),
    path('<slug:slug>/',views.category_detail_api_view,name='catigories-details'),

]