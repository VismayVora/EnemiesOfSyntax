from django.shortcuts import render
from rest_framework import status,permissions,viewsets
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .models import *
from .serializers import *
from accounts.serializers import *
from rest_framework import mixins
from rest_framework.generics import ListAPIView


# Create your views here.
class OwnerProjectDetails(viewsets.ModelViewSet):
	queryset = Project.objects.all()
	serializer_class = ProjectDetailsSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Project.objects.filter(owner=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(owner = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class ContractorProjectDetails(viewsets.ModelViewSet):
	queryset = Project.objects.all()
	serializer_class = ProjectDetailsSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Project.objects.filter(contractors=self.request.user)

# class OngoingProjectsView(APIView):

# 	permission_classes = [permissions.IsAuthenticated]
	
# 	def get(self, request):
# 		owner = self.request.user
# 		projects = Project.objects.filter(owner = owner,completed=False)
# 		serializer = ProjectSerializer(projects, many=True)
# 		return Response(serializer.data)

# class CompletedProjectsView(GenericAPIView):

# 	permission_classes = [permissions.IsAuthenticated]
	
# 	def get(self, request):
# 		owner = self.request.user
# 		projects = Project.objects.filter(owner = owner,completed=True)
# 		serializer = ProjectSerializer(projects, many=True)
# 		return Response(serializer.data)

class ContractorsList(GenericAPIView):
	serializer_class = ContractorRegisterSerializer

	permission_classes = [permissions.IsAuthenticated]

	def get(self,request):
		contractors = Contractor.objects.all()
		serializer = ContractorRegisterSerializer(contractors, many=True)
		return Response(serializer.data)

	# def post(self,request):
	# 	contractors = Contractor.objects.filter(department = self.request.data['department'])
	# 	serializer = ContractorRegisterSerializer(contractors, many=True)
	# 	return Response(serializer.data)

class ContractorAttendanceView(GenericAPIView):
	serializer_class = ContractorAttendanceSerializer
	permission_classes = [permissions.IsAuthenticated]

	def post(self,request):
		contractor_attendance = ContractorAttendance.objects.filter(project_id = self.request.data['pk'],date=self.request.data['date'])
		serializer = ContractorAttendanceSerializer(contractor_attendance, many=True)
		return Response(serializer.data)

class WorkerAttendanceView(GenericAPIView):
	serializer_class = WorkerAttendanceSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get(self,request,pk):
		worker_attendance = WorkerAttendance.objects.filter(project_id = pk)
		serializer = WorkerAttendanceSerializer(worker_attendance, many=True)
		return Response(serializer.data)

# class ContractorAttendanceDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = ContractorAttendance.objects.all()
#     serializer_class = ContractorAttendanceSerializer

# class WorkerAttendanceDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = WorkerAttendance.objects.all()
#     serializer_class = WorkerAttendanceSerializer

class ContractorAttendanceDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = ContractorAttendance.objects.all()
    serializer_class = ContractorAttendanceSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class WorkerAttendanceDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = WorkerAttendance.objects.all()
    serializer_class = WorkerAttendanceSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all()
	serializer_class = TaskSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Task.objects.all()
	
	# def perform_create(self,serializer):
	# 	serializer.save(owner = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class ContractorViolationViewset(viewsets.ModelViewSet):
	queryset = ContractorViolation.objects.all()
	serializer_class = ContractorViolationSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return ContractorViolation.objects.all()
	
	def perform_create(self,serializer):
		serializer.save(owner = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class WorkerViolationViewset(viewsets.ModelViewSet):
	queryset = WorkerViolation.objects.all()
	serializer_class = WorkerViolationSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return WorkerViolation.objects.all()
	
	def perform_create(self,serializer):
		serializer.save(owner = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)



