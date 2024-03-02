from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model
import jwt

User = get_user_model()
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

register_view = RegisterView.as_view()
# class LoginView(APIView):
    # def post(self, request):
    #     email = request.data['email']
    #     password = request.data['password']

    #     user = User.objects.filter(email=email).first()

    #     if user is None:
    #         raise AuthenticationFailed('User not found!')

    #     if not user.check_password(password):
    #         raise AuthenticationFailed('Incorrect password!')

    #     payload = {
    #         'id': user.id,
    #         'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=3),
    #         'iat': datetime.datetime.utcnow()
    #     }

    #     token = jwt.encode(payload, 'django-insecure-=8q4e_tb4)*+m5os_0wjs&ta(2e1i!29u@xk5_9zkd25(qa5w5', algorithm='HS256').decode('utf-8')

    #     response = Response()

    #     response.set_cookie(key='jwt', value=token, httponly=True)
    #     response.data = {
    #         'jwt': token
    #     }
    #     return response


# login_view = LoginView.as_view()

class UserView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
user_view = UserView.as_view()


class LogoutView(APIView): 
    permission_classes = (IsAuthenticated,)
    def post(self, request):  
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
logout_view = LogoutView.as_view()    