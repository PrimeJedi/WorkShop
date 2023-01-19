from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name = 'home'),
    # path('about_us/', views.about_us, name = 'about'),
    # path('Вход/', views.signup, name = 'signup'),
]