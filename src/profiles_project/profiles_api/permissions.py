from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):
	"""Allow users to edit their own Profile"""

	def has_object_permission(self, request, view, obj):
		"""Check if user is editing OWN profile"""

		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.id == request.user.id


class PostOwnStatus(permissions.BasePermission):
	"""Allow user to update their own status"""

	def has_object_permission(self, request, view, obj):
		"""Checks the user trying to update their own status"""

		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.user_profile.id == request.user.id