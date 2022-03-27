from rest_framework import serializers
from accounts.serializers import ContractorRegisterSerializer
from accounts.models import *
from .models import *
from datetime import datetime, date

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
    total_time = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()

    class Meta:
        model = WorkerAttendance
        fields = '__all__'
    
    def get_total_time(self,obj):
        if obj.exit_time and obj.enter_time:
            tot_time = (datetime.combine(date.today(), obj.exit_time) - datetime.combine(date.today(), obj.enter_time)).seconds/3600
        else:
            tot_time = 0
        return int(tot_time)
    
    def get_status(self,obj):
        if obj.total_time and obj.total_time >= 6:
            status = "Full-Day"
        if obj.total_time and obj.total_time < 6 and obj.total_time != 0:
            status = "Half-Day"
        else:
            status = "Pending"
        
        return status

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'

class ContractorViolationSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContractorViolation
        fields = '__all__'

class WorkerViolationSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkerViolation
        fields = '__all__'
    