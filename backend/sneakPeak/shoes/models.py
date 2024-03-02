import os
import uuid
from io import BytesIO
from PIL import Image 

from django.db import models
from django.core.files import File
from colorfield.fields import ColorField
from django.contrib.auth.models import User

class Tag(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50,unique = True)

    def __str__(self):
        return self.name

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
    logo = models.ImageField(upload_to='brnads/',blank=True,null=True)

    def __str__(self):
        return self.name

class Shoe(models.Model):

    

    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag,blank=True)
    class Meta:
        ordering = ('-created_at',)

    @property
    def get_category_slug(self):
        return self.category.slug   

    def __str__(self):
        return self.name
    
    

class ShoeColor(models.Model):
    def get_images_path(instance,filename):
        base, ext = os.path.splitext(filename)
        ext = ext.lower()
        return f"shoes/{instance.name}{ext}"
    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to=get_images_path,null=True,blank=True)
    image2 = models.ImageField(upload_to=get_images_path,null=True,blank=True)
    image3 = models.ImageField(upload_to=get_images_path,null=True,blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    hex = ColorField(default='#FF0000')
    thumbnail = models.ImageField(upload_to=get_images_path,null=True,blank=True)

    def __str__(self):
        return f"{self.shoe.slug}-{self.name}"

   

    def get_thumbnail(self):
        if self.thumbnail:
            return 'http://127.0.0.1:8000' + self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()

                return 'http://127.0.0.1:8000' + self.thumbnail.url
            else:
                return ''

    def make_thumbnail(self, image, size=(300, 200)):
        img = Image.open(image)
        img.convert('RGB')
        img.thumbnail(size)

        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)

        thumbnail = File(thumb_io, name=image.name)

        return thumbnail   


class ShoeSize(models.Model):
    color = models.ForeignKey(ShoeColor, on_delete=models.CASCADE,default=1)
    size = models.DecimalField(max_digits=4, decimal_places=1)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.color.shoe} - {self.color} - Size {self.size}"




