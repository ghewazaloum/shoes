from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls')),
    path('shoes/',include('shoes.urls')),
    path('payment/',include('payment.urls')),
] + static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)

