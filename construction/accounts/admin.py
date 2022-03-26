from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.
class UserAdmin(UserAdmin):
    model = User
    list_display = ['email', 'phone_no','name','is_staff','is_active','is_owner','is_contractor']
    list_filter = ['email', 'phone_no','name','is_staff','is_active','is_owner','is_contractor']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name','phone_no',)}),
        ('Permissions', {'fields': ('is_active','is_staff','is_owner','is_contractor','is_superuser')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide,'),
            'fields': ('email', 'password1', 'password2', 'phone_no','name','is_staff','is_active','is_owner','is_contractor'),
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

class ContractorAdmin(UserAdmin):
    model = Contractor
    list_display = ['email', 'phone_no','name','department','photo','rating','description','is_staff','is_active','is_owner','is_contractor']
    list_filter = ['email', 'phone_no','name','department','photo','rating','description','is_staff','is_active','is_owner','is_contractor']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name','phone_no','department','photo','rating','description',),}),
        ('Permissions', {'fields': ('is_active','is_staff','is_owner','is_contractor','is_superuser')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide,'),
            'fields': ('email','phone_no', 'password1', 'password2', 'name','is_staff','is_active','is_contractor','is_owner','department','photo'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

class WorkerAdmin(UserAdmin):
    model = Worker
    list_display = ['email', 'phone_no','name','department','aadhaar_no','is_staff','is_active','is_owner','is_contractor']
    list_filter = ['email', 'phone_no','name','department','aadhaar_no','is_staff','is_active','is_owner','is_contractor']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name','phone_no','department','aadhaar_no',)}),
        ('Permissions', {'fields': ('is_active','is_staff','is_owner','is_contractor','is_superuser')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide,'),
            'fields': ('email', 'password1', 'password2', 'phone_no','name','department','aadhaar_no','is_staff','is_active','is_owner','is_contractor'),
        }),
    )

    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(User, UserAdmin)
admin.site.register(Contractor,ContractorAdmin)
admin.site.register(Worker,WorkerAdmin)
