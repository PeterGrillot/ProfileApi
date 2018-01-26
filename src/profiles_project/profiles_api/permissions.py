from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):
	"""Allow users to edit their own Profile"""

	def has_object_permission(self, request, view, obj):
		"""Check if user is editing OWN profile"""

		if request.method in permissions.SAFE_METHODS:
			return True