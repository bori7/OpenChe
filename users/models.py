from django.db import models
#from firebase_orm import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_student = models.BooleanField(default = True)
    #is_student = bool("true") 
    #is_teacher = bool("false") 
    is_teacher = models.BooleanField(default = False)

    def __str__(self):
        return self.username


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username