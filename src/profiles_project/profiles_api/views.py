from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class HelloApiView(APIView):
	
	"""Test API View"""
	def get(self, request, format=None):
		
		"""returns a List of APIViews"""
		an_apiview = [
			'Use HTTP methods (get post patch put delete)',
			'Similar to Django',
			'Manual URLS'
			'Logic'
		]

		return Response({'mesage': 'Hello!', 'an_apiview': an_apiview})