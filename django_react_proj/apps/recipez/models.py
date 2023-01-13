from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=240)
    description = models.TextField()
    ingredients = models.TextField()
    type = models.CharField(max_length=50)
    steps = models.TextField()

    def __str__(self):
        return f"{self.type}:{self.name}"

