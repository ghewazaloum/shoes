from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Shoe,Category,ShoeColor,ShoeSize,Tag,Brand

class ColorInCart(serializers.ModelSerializer):
    class Meta:
        model = ShoeColor
        fields = [
            'image',
            'price',
 
        ]

class sizeShoeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShoeSize
        fields = [
            'size',
            'quantity',
            'id'
        ]   

class ShoeInCartSerializer(serializers.ModelSerializer):
    color = ColorInCart(read_only=True)
    # quantityInCart = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ShoeSize
        fields = [
            'size',
            'id',
            'color',

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
        return sizeShoeSerializer(sizes,many=True).data
        # return sizes.values_list('size','quantity')

        

class ShoeSerializer(serializers.ModelSerializer):    
    category_slug = serializers.SerializerMethodField(read_only=True)
    url = serializers.SerializerMethodField(read_only = True)
    colors_url = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)
    tags = serializers.SerializerMethodField(read_only=True)
    class  Meta:
        model = Shoe
        fields = [
            'pk',
            'name',
            'slug',
            'description',
            'category_slug',
            'image',
            'url',
            'colors_url',
            'tags',            
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
    def get_tags(self,obj):
        request = self.context.get('request')
        if request is None:
            return None
        tags = obj.tags.values_list('name') or None
        return tags

    def get_image(self,obj):
        request = self.context.get('request')
        if request is None:
            return None
        color = ShoeColor.objects.filter(shoe=obj)
        if not color.exists():
            return None
        image = color.first().image.url
        return request.build_absolute_uri(image)




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
            'url',
        ]

class TagsSerializers(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Tag
        fields = [
            'name',
            'url',
        ]
    def get_url(self,obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("tag-detail",kwargs={"tag_slug":obj.slug},request=request)
class BrandSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Brand
        fields = [
            'name',
            'logo',
            'url',
        ]
    def get_url(self,obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("brand-detail",kwargs={"brand_slug":obj.slug},request=request)

# class Cart(serializers.ModelSerializer):
#     shoes = ShoeInCartSerializer(many=True)

#     class Meta:
#         model = Cart
#         fields = [
#             'id',
#             'shoes',
#             'total_price',
#         ]
        