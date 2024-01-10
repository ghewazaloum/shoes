from rest_framework import serializers


from .models import Shoe,Category

class ProductInlineSerializer(serializers.Serializer):
    url = serializers.HyperlinkedIdentityField(view_name='shoe-detail',
                                               read_only=True )

class ShoeSerializer(serializers.ModelSerializer):

    class  Meta:
        model = Shoe
        fields = [
            'id',
            'name',
            # 'slug',
            'description',
            'get_absolute_url',
            # 'category',
            'price',
            'image',
            'thumbnail',
            # 'created_at',
        ]

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'get_absolute_url'
        ]