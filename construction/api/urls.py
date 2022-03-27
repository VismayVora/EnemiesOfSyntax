from rest_framework.routers import DefaultRouter
from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include,url


router = DefaultRouter()
router.register(r'create_project', views.OwnerProjectDetails)
router.register(r'contractor_projects', views.ContractorProjectDetails)
router.register(r'task', views.TaskViewSet)
router.register(r'contractorviolation', views.ContractorViolationViewset)
router.register(r'workerviolation', views.WorkerViolationViewset)


urlpatterns = [
    url('', include(router.urls)),
    # path('ongoingprojects/', views.OngoingProjectsView.as_view(), name = 'Ongoing Projects'),
    # path('completedprojects/', views.CompletedProjectsView.as_view(), name = 'Completed Projects'),
    path('contractors/', views.ContractorsList.as_view(), name = 'Contractors'),
    path('contractor_attendance/', views.ContractorAttendanceView.as_view()),
    path('contractor_attendance_detail/<int:pk>/', views.ContractorAttendanceDetail.as_view()),
    path('worker_attendance/<int:pk>/', views.WorkerAttendanceView.as_view()),
    path('worker_attendance_detail/<int:pk>/', views.WorkerAttendanceDetail.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)