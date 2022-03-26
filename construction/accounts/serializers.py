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
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = User
        fields = '__all__'

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        confirm_password = attrs.pop('confirm_password')
        if password != confirm_password:
            raise ValidationError("The password doesn't match!")
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
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = Contractor
        fields = '__all__'

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        confirm_password = attrs.pop('confirm_password')
        if password != confirm_password:
            raise ValidationError("The password doesn't match!")
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        return attrs

    # To create a vendor user
    def create(self, validated_data):
        validated_data['is_active'] = False
        validated_data['is_contractor'] = True
        return Contractor.objects.create_user(**validated_data)

class WorkerRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = Worker
        fields = '__all__'

    # To validate data received
    def validate(self, attrs):
        aadhaar_no = attrs.get('aadhaar_no', ' ')
        password = attrs.get('password')
        confirm_password = attrs.pop('confirm_password')
        if password != confirm_password:
            raise ValidationError("The password doesn't match!")
        if not isValidAadharNumber(aadhaar_no):
            raise serializers.ValidationError('Please enter a valid aadhaar no!')
        return attrs

    # To create a vendor user
    def create(self, validated_data):
        validated_data['is_active'] = False
        validated_data['is_worker'] = True
        return Worker.objects.create_user(**validated_data)