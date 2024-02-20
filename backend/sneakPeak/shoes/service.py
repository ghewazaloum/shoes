from decimal import Decimal

from django.conf import settings

from .serializers import ShoeInCartSerializer
from .models import Shoe,ShoeColor,ShoeSize


class Cart:
    def __init__(self, request):
        """
        initialize the cart
        """
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            # save an empty cart in session
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart

    def save(self):
        self.session.modified = True

    def add(self, product, quantity=1, overide_quantity=False):
        """
        Add product to the cart or update its quantity
        """

        product_id = product
        if product_id not in self.cart:
            price = ShoeSize.objects.get(id=product_id).color.price
            self.cart[product_id] = {
                "quantity": 0,
                "price": str(price)
            }
        if overide_quantity:
            self.cart[product_id]["quantity"] = quantity
        else:
            self.cart[product_id]["quantity"] += quantity
        self.save()

    def remove(self, product):
        """
        Remove a product from the cart
        """
        product_id = product

        if product_id in self.cart:
            del self.cart[product_id]
            self.save()

    def __iter__(self):
        """
        Loop through cart items and fetch the products from the database
        """
        product_ids = self.cart.keys()
        products = ShoeSize.objects.filter(id__in=product_ids)
        cart = self.cart.copy()
        for product in products:
            # shoe = product.color
            cart[str(product.id)]["product"] = ShoeInCartSerializer(product).data
            # cart[str(product.id)]["product"] += 
        for item in cart.values():

            item["price"] = Decimal(item["price"]) 
            item["total_price"] = item["price"] * item["quantity"]
            yield item

    def __len__(self):
        """
        Count all items in the cart
        """
        return sum(item["quantity"] for item in self.cart.values())

    def get_total_price(self):
        return sum(Decimal(item["price"]) * item["quantity"] for item in self.cart.values())

    def clear(self):
        # remove cart from session
        del self.session[settings.CART_SESSION_ID]
        self.save()
