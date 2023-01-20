from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name = 'home'),    
    path('Вход/', views.signup, name = 'signup'),
    # path('about_us/', views.about_us, name = 'about'),
]