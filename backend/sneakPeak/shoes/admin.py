from django.contrib import admin

from .models import Shoe,Category,Brand,ShoeColor,ShoeSize,Tag

admin.site.register(Shoe)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(ShoeColor)
admin.site.register(ShoeSize)
admin.site.register(Tag)
