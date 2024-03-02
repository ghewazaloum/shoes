import uuid
from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal
from shoes.models import ShoeSize

class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True)
    client = models.ForeignKey(User,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.client.username}"
    @property
    def total_price(self):
        cart_items = CartItem.objects.filter(cart=self)
        total_price = Decimal('0.00')
        for item in cart_items:
            total_price += item.price
        return total_price
    

class CartItem(models.Model):
    shoe = models.ForeignKey(ShoeSize,on_delete=models.CASCADE,related_name='items')
    quantity = models.IntegerField(default=0)
    cart = models.ForeignKey(Cart,on_delete=models.CASCADE,related_name='cartItems')

    def __str__(self):
        return f"{self.shoe}"
    @property
    def price(self):
        shoe_price =self.shoe.color.price
        return int(self.quantity)*shoe_price


class PaymentHistory(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    cart=models.ForeignKey(Cart, on_delete=models.SET_NULL, blank=True, null=True)
    date=models.DateTimeField(auto_now_add=True)
    payment_status=models.BooleanField(default=True)


    def __str__(self):
        return self.product.name