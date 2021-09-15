from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('intro/', views.intro),
    path('map/', views.map),
    path('map/detail/', views.detail),
    path('list/', views.list)
]