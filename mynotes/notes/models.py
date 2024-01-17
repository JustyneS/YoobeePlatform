from django.db import models

class Note(models.Model):
    content = models.TextField()

class Highlight(models.Model):
    content = models.TextField()

class Bookmark(models.Model):
    content = models.TextField()
