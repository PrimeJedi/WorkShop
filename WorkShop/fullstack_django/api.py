from .models import Items
from rest_framework import viewsets, permissions
from .serializer import ItemsSerializer


class ItemsViewSet(viewsets.ModelViewSet):
    queryset = Items.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ItemsSerializer