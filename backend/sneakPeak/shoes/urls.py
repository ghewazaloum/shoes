from django.urls import path 

from . import views 

urlpatterns = [
    path('<int:pk>/',views.shoe_detail_api_view,name="shoe-datail"),
]