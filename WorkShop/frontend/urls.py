from django.urls import path,include
from . import views


urlpatterns = [
    # path('',views.index)
    path('', views.index, name = 'home'),
    path('Вход', views.signup, name = 'signup'),
]