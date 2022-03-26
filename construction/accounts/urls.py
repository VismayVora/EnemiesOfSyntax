from django.urls import path
from . import views
from django.conf.urls import include

urlpatterns = [
    path('owner_register/', views.OwnerRegisterAPI.as_view(), name = 'Owner Registration'),
    path('contractor_register/', views.ContractorRegisterAPI.as_view(), name = 'Contractor Registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),

]