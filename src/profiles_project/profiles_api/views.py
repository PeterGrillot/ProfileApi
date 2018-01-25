from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import serializers

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