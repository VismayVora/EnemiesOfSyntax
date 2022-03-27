from django.urls import path
from . import views
from django.conf.urls import include,url
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'modify_worker', views.WorkersViewSet)

urlpatterns = [
    url('', include(router.urls)),
    path('owner_register/', views.OwnerRegisterAPI.as_view(), name = 'Owner Registration'),
    path('contractor_register/', views.ContractorRegisterAPI.as_view(), name = 'Contractor Registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('worker/',views.WorkersList.as_view(),name= 'workers')

]