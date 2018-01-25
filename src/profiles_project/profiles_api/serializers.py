from rest_framework import serializers

class HelloSerializer(serializers.Serializer):
	"""Testing API"""
	
	name = serializers.CharField(max_length=10)

