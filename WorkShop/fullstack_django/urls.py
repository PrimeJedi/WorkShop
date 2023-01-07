from rest_framework import routers
from .api import ItemsViewSet


router = routers.DefaultRouter()
router.register('api/Items', ItemsViewSet, 'Items')


urlpatterns = router.urls