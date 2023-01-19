from django.shortcuts import render
from . import views

def index(request):
    return render(request, 'frontend\index.html')

# def onepage(request):
#     return render(request, 'frontend\One_page.html')

# def index(request):
#     return render(request, 'frontend\home.html')

# def about_us(request):
#     return render(request, 'frontend\about.html')

# def signup(request):
#     return render(request, 'frontend\SignUp.html')
