from django.shortcuts import render
from . import views

def index(request):
    return render(request, 'frontend\index.html')

def about(request):
    return render(request,'frontend\index.html')