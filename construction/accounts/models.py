from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from rest_framework.authtoken.models import Token
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password instead of username.
        """
        if not email:
            raise ValueError('The Email must be set')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    username=None

    # extra fields
    email = models.EmailField(("Email Address"),primary_key=True)
    name = models.CharField(max_length = 30)
    phone_no = PhoneNumberField()
    is_owner = models.BooleanField(default=False)
    is_contractor = models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return self.name

    @property
    def token(self):
        token = Token.objects.get(user=User.objects.get(self.id))
        return token

class Contractor(User):
    department = models.CharField(max_length=70)
    photo = models.ImageField(null=True,blank=True)
    rating = models.IntegerField(null=True,blank=True)
    description = models.TextField(null=True,blank=True)

class Worker(User):
    department = models.CharField(max_length=70)
    aadhaar_no = models.PositiveBigIntegerField(primary_key=True)
    photo = models.ImageField(null=True,blank=True)
    is_worker = models.BooleanField(default=False)