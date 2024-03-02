from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from .views import register_view,user_view,logout_view

urlpatterns = [
    path('register/',register_view,name="register"),
    # path('login/',login_view,name="login"),
    path('profile/',user_view,name='profile'),
    path('logout/',logout_view,name='logout'),

    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pait_view'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh_view'),
    path('token/verify/',TokenVerifyView.as_view(),name='token_verfiy_view'),



]