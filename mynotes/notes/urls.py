from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet, HighlightViewSet, BookmarkViewSet

router = DefaultRouter()
router.register(r'notes', NoteViewSet)
router.register(r'highlights', HighlightViewSet)
router.register(r'bookmarks', BookmarkViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
