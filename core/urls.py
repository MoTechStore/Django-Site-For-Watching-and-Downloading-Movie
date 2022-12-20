from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.liveSearch, name='search'),
    path('download/<int:pk>/', views.download, name='download'),


]
