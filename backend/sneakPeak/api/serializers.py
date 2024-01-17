from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
            'username',
            'email',
            'password',
            'password2'

        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'password2': {'write_only': True}

        }
    def create(self, validated_data):
        password = validated_data.pop('password',None)
        password2 = validated_data.pop('password2',None)
        
        instance = self.Meta.model(**validated_data)
        if password is not None:
            if password == password2:
                instance.set_password(password)
                instance.save()
            # return None
            else:   
                raise ValidationError("password invalid")
        return instance




# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()


