from io import BytesIO
from PIL import Image 

from django.db import models
from django.core.files import File


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name
   
    def get_absolute_url(self):
        return f'/{self.slug}/'

class Brand(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Shoe(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='shoes/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='shoes/',blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return f'/{self.category.slug}/{self.slug}/'
        
    def get_image(self):
        if self.image:
            return 'https://127.0.0.1:8000'+ self.image.url
        return ''
    
    def get_thumbnail(self):
        if self.thumbnail:
            return 'https://127.0.0.1:8000'+ self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()
            else:
                return ''

    def make_thumbnail(self, image, size=(300,200)):
        img = Image.open  (image)
        img.convert('RGB')
        img.thumbnail(size)
        thumb_io = BytesIO()
        img.save(thumb_io,'JPEG',quality=85)

        thumbnail = File(thumb_io, name=image.name)
        return thumbnail
    

class ShoeSize(models.Model):
    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE)
    size = models.DecimalField(max_digits=4, decimal_places=1)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.shoe} - Size {self.size}"