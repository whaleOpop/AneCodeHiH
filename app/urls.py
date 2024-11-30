from django.urls import path
from . import views,login_view,register_view

urlpatterns = [
    path('api/login/', login_view, name='login'),
    path('api/register/', register_view, name='register'),
]