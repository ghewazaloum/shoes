from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Shoe,Category,ShoeColor,ShoeSize



class sizeShoeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShoeSize
        fields = [
            'size',
            'quantity',
            # 'color'
        ]        

class colorShoeSerializer(serializers.ModelSerializer):
    sizes = serializers.SerializerMethodField(read_only = True)
    thumbnail = serializers.URLField(read_only=True,source='get_thumbnail')
    class Meta:
        model = ShoeColor
        fields = [
            
            'name',
            'hex',
            'thumbnail',
            'image',
            'image2',
            'image3',
            'price',
            'sizes',
        ]

    def get_sizes(self,obj):
        if not hasattr(obj,'shoe'):
            return None
        if not isinstance(obj,ShoeColor):
            return None
        sizes = ShoeSize.objects.filter(color=obj,quantity__gt=0)
        return sizes.values_list('size','quantity')

        

class ShoeSerializer(serializers.ModelSerializer):    
    category_slug = serializers.SerializerMethodField(read_only=True)
    url = serializers.SerializerMethodField(read_only = True)
    colors_url = serializers.SerializerMethodField(read_only=True)
    class  Meta:
        model = Shoe
        fields = [
            'pk',
            'name',
            'slug',
            'description',
            'category_slug',
            'url',
            'colors_url'
            
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
    def get_colors_url(self,obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("colorshoe-detail",kwargs={"category_slug":obj.get_category_slug,"slug":obj.slug},request=request)

        
       




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



