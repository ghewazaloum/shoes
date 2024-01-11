from rest_framework import permissions

class normalUserMixin():
    permission_classes = [permissions.IsAdminUser,permissions.IsAuthenticated]
    

# class CategoryQuerysetMixin():
#     categry_field = 'slug'
#     def get_queryset(self, *args, **kwargs):
#         lookup_data = {}
#         lookup_data[self.categry_field] = request.


