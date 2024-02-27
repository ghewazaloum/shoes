from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault


from .models import Cart,CartItem
from shoes.serializers import ShoeInCartSerializer

class CartItemSerializer(serializers.ModelSerializer):
    shoe = ShoeInCartSerializer(read_only=True)
   
    class Meta:
        model = CartItem
        fields = [
            'shoe',
            'quantity',
            'price'
        ]


class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    items  = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Cart
        fields = ['id','total_price','items']
    def get_items(self,obj):
        items = CartItem.objects.filter(cart=obj)
        items = CartItemSerializer(items,many=True,read_only=True).data
        return items





