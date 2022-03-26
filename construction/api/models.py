from django.db import models
from accounts.models import *
from django.conf import settings

# Create your models here.
class Project(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name ="owner",on_delete=models.CASCADE )
    name = models.CharField(max_length = 100)
    location_name = models.CharField(max_length = 100)
    description = models.TextField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    contractors = models.ManyToManyField(Contractor)