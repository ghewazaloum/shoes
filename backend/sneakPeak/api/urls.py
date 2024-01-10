from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pait_view'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh_view'),
    path('token/verify/',TokenVerifyView.as_view(),name='token_verfiy_view'),



]