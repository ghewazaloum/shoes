from rest_framework import permissions

class normalUserMixin():
    permission_classes = [permissions.IsAdminUser,permissions.IsAuthenticated]
    