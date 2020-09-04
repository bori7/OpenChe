from rest_framework import viewsets
from django.shortcuts import render
from rest_framework.decorators import action

from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

