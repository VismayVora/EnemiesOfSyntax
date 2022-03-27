from django.db import models
from accounts.models import *
from django.conf import settings
import datetime
from rest_framework import generics

# Create your models here.
class Project(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name ="owner",on_delete=models.CASCADE )
    name = models.CharField(max_length = 100)
    location_name = models.CharField(max_length = 100)
    description = models.TextField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    #contractors = models.ManyToManyField(Contractor)
    contractors = models.ForeignKey(Contractor,on_delete=models.CASCADE,null=True,blank=True)
    image = models.ImageField(null=True,blank=True)
    completed = models.BooleanField(default=False)

class ContractorAttendance(models.Model):
    date = models.DateField(default=datetime.date.today)
    enter_time = models.TimeField()
    exit_time = models.TimeField()
    total_time = models.IntegerField()
    contractor = models.ForeignKey(Contractor,on_delete=models.CASCADE)
    name = models.CharField(max_length = 50,null=True,blank=True)
    project = models.ForeignKey(Project,on_delete=models.CASCADE)

class WorkerAttendance(models.Model):
    date = models.DateField(default=datetime.date.today)
    enter_time = models.TimeField(null=True,blank=True)
    exit_time = models.TimeField(null=True,blank=True)
    total_time = models.IntegerField(null=True,blank=True)
    worker = models.ForeignKey(Worker,on_delete=models.CASCADE)
    name = models.CharField(max_length = 50, null=True, blank=True)
    project = models.ForeignKey(Project,on_delete=models.CASCADE,null=True,blank=True)
    department = models.CharField(max_length = 50, null=True,blank=True)
    status = models.CharField(max_length=70,null=True,blank=True)

class Task(models.Model):
    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    project = models.ForeignKey(Project,null=True,on_delete = models.SET_NULL)
    title = models.CharField(max_length = 50)
    description = models.TextField(blank = True)
    priority_no = models.PositiveIntegerField(blank = True)
    status = models.BooleanField(default=False,blank = True)
    duedate = models.DateTimeField(blank = True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['status']

class ContractorViolation(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    helmet = models.CharField(max_length = 30, default="Helmet Violation")
    mask = models.CharField(max_length = 30, default="Mask Violation")
    photo = models.ImageField()
    contractor = models.ForeignKey(Contractor,on_delete=models.CASCADE)
    name = models.CharField(max_length = 30, null=True,blank=True)

class WorkerViolation(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    helmet = models.CharField(max_length = 30, default="Helmet Violation")
    mask = models.CharField(max_length = 30, default="Mask Violation")
    photo = models.ImageField()
    worker = models.ForeignKey(Contractor,on_delete=models.CASCADE)
    name = models.CharField(max_length = 30, null=True,blank=True)
