from apps.recipez.models import Recipe

import json
with open('apps/recipez/scripts/recipes.json', 'r') as f:
    recipes = json.load(f)

def run():
    for meal_type, recipe_meals in recipes.items():
        for meal in recipe_meals:
            Recipe.objects.create(name=meal['name'], description=meal['description'],
                                  ingredients=meal['ingredients'], type=meal['type'],
                                  steps=meal.get('steps', "")  # meal?.name ? meal.name : ''
                                  )