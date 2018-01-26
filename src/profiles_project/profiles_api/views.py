from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters

from . import serializers
from . import models
from . import permissions

# Create your views here.
class HelloApiView(APIView):
	
	"""Test API View"""

	serializer_class = serializers.HelloSerializer

	def get(self, request, format=None):
		
		"""returns a List of APIViews"""
		an_apiview = [
			'Use HTTP methods (get post patch put delete)',
			'Similar to Django',
			'Manual URLS'
			'Logic'
		]

		return Response({'mesage': 'Hello!', 'an_apiview': an_apiview})

	def post(self, request):
		"""Create Hello Massage"""
		serializer = serializers.HelloSerializer(data=request.data)

		if serializer.is_valid():
			name = serializer.data.get('name')
			message = 'Hello {0}'.format(name)
			return Response({'message': message})
		else:
			return Response(
				serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def put(self, request, pk=None):
		"""Update Object"""
		return Response({'method': 'put'})

	def patch(self, request, pk=None):
		"""Only updates provided"""
		return Response({'method': 'patch'})

	def delete(self, request, pk=None):
		"""Delete Object"""
		return Response({'method': 'delete'})

class HelloViewSet(viewsets.ViewSet):
	""" Test API viewset"""

	serializer_class = serializers.HelloSerializer

	def list(self, request):
		"""Return Hello"""
		a_viewset = [
			'Use actions (list create retieve update partial_update)',
			'Less Code'
		]
		return Response({'mesage': 'Hello!', 'a_viewset': a_viewset})


	def create (self,request):
		"""create """
		serializer = serializers.HelloSerializer(data=request.data)
		if serializer.is_valid():
			name = serializer.data.get('name')
			message = 'Hello {0}'.format(name)
			return Response({'message': message})
		else:
			return Response(
					serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def retrieve(self,request, pk=None):
		"""Handle retieve by ID"""
		return Response({'http_method': 'GET'})

	def update(self,request, pk=None):
		"""update """
		return Response({'http_method': 'PUT'})

	def partial_update(self,request, pk=None):
		"""partial_update"""
		return Response({'http_method': 'PATCH'})

	def destroy(self,request, pk=None):
		"""partial_update"""
		return Response({'http_method': 'DELETE'})
	

class UserProfileViewSet(viewsets.ModelViewSet):
	"""Handles creating, reading and updating profiles"""

	serializer_class = serializers.UserProfileSerializer
	queryset = models.UserProfile.objects.all()
	authentication_classes = (TokenAuthentication,)
	permission_classes = (permissions.UpdateOwnProfile,)
	filter_backends = (filters.SearchFilter,)
	search_fields = ('name', 'email',)