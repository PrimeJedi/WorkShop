from django.shortcuts import render
from . import views

# Create your views here.
# def index(request):
#     return render(request, 'frontend\index.html')

def index(request):
    return render(request, 'frontend\home.html')

def signup(request):
    return render(request, 'frontend\SignUp.html')