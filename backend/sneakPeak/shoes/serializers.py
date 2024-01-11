from rest_framework import serializers
from rest_framework.reverse import reverse
from django.utils.text import slugify
from .models import Shoe,Category



class ShoeSerializer(serializers.ModelSerializer):    
    category_slug = serializers.SerializerMethodField(read_only=True)
    url = serializers.SerializerMethodField(read_only = True)
    class  Meta:
        model = Shoe
        fields = [
            'pk',
            'name',
            'slug',
            'description',
            # 'get_absolute_url',
            'category_slug',
            'price',
            'image',
            'get_thumbnail',
            'url',
        ]

    def get_category_slug(self,obj):
        if not hasattr(obj,'category'):
            return None
        if not isinstance(obj,Shoe):
            return None
        return obj.get_category_slug
    
    def get_url(self,obj):
        request = self.context.get('request')
        if request is None : 
            return None
        return reverse("shoe-detail",kwargs={"category_slug":obj.get_category_slug,"slug":obj.slug},request=request)





class categorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='category-detail',lookup_field='slug',
                                           read_only=True )
    class Meta:
        model = Category
        fields = [
          
            'id',
            'name',
            'slug',
            'description',
            # 'get_absolute_url',
            'url',
        ]