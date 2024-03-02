from django.contrib import admin

from .models import Shoe,Category,Brand,ShoeColor,ShoeSize,Tag
# from .models import Cart,CartItem



admin.site.register(Shoe)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(ShoeColor)
admin.site.register(ShoeSize)
admin.site.register(Tag)
# admin.site.register([Cart, CartItem])