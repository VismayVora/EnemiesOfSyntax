from rest_framework import serializers
from accounts.serializers import ContractorRegisterSerializer
from accounts.models import *
from .models import *

# class ProjectSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Project
#         fields = "__all__"

class ProjectDetailsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')
    #contractors = ContractorRegisterSerializer(read_only=True,many=True)
    
    class Meta:
        model = Project
        fields = "__all__"

class ContractorAttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContractorAttendance
        fields = '__all__'

class WorkerAttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkerAttendance
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'
    