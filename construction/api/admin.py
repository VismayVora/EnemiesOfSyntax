from django.contrib import admin
from .models import *

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
  list_display = ['id','owner','name','location_name','description','latitude','longitude','image','contractors','completed']
  list_display_links = ['name']
      
admin.site.register(Project,ProjectAdmin)
admin.site.register(ContractorAttendance)
admin.site.register(WorkerAttendance)
admin.site.register(Task)
admin.site.register(WorkerViolation)
admin.site.register(ContractorViolation)
