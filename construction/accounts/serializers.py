from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import *
from rest_framework.exceptions import ValidationError
import re
 
email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

def isValidAadharNumber(str):

    regex = ("^[2-9]{1}[0-9]{3}\\" +
             "s[0-9]{4}\\s[0-9]{4}$")

    p = re.compile(regex)

    if (str == None):
        return False
 
    if(re.search(p, str)):
        return True
    else:
        return False

class OwnerRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'phone_no', 'password']

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        return attrs

    # To create a new user
    def create(self, validated_data):
        validated_data['is_active'] = False
        validated_data['is_owner'] = True
        return User.objects.create_user(**validated_data)    

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    
    class Meta:
        model = User
        fields = ['email','password']

class ContractorRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = Contractor
        fields = ['name', 'email', 'phone_no', 'password','department','photo']

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        return attrs

    # To create a contractor
    def create(self, validated_data):
        validated_data['is_active'] = False
        validated_data['is_contractor'] = True
        return Contractor.objects.create_user(**validated_data)

class WorkerRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = Worker
        fields = ['name', 'email', 'phone_no', 'password','department','aadhaar_no','photo']

    # To validate data received
    def validate(self, attrs):
        aadhaar_no = attrs.get('aadhaar_no', ' ')
        password = attrs.get('password')
        if not isValidAadharNumber(aadhaar_no):
            raise serializers.ValidationError('Please enter a valid aadhaar no!')
        return attrs

    # To create a worker
    def create(self, validated_data):
        validated_data['is_active'] = False
        validated_data['is_worker'] = True
        return Worker.objects.create_user(**validated_data)