from rest_framework import serializers
from accounts.models import *
from models import *

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = "__all__"