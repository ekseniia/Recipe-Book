import { Injectable } from '@angular/core';
// EventEmitter, 
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	// recipeSelected = new EventEmitter<Recipe>();
	recipesChanged = new Subject<Recipe[]>()
	
	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel', 
			'A super-tasty Schnitzel - just awesome!', 
			'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/11/28/WomansDayBR106354/chicken-schnitzel.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('Salad', 2)
			]),
		new Recipe(
			'Big Fat Burger', 
			'What else you need to say?', 
			'https://www.fatburgercanada.com/wp-content/uploads/2015/07/king-burger-541x633.png',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 3)
			]),
		new Recipe(
			'Spaghetti',
			'Very Tasteful!',
			'https://uproxx.files.wordpress.com/2016/01/ketchup-spaghetti-feature-image.jpg?quality=100&w=650',
			[
				new Ingredient('Spaghetti', 10),
				new Ingredient('Cheese', 1)
			]
			)
  ]; //private - не даст доступ к этому массиву извне

  constructor(private slService: ShoppingListService){}

  setRecipes(recipes: Recipe[]){
  	this.recipes = recipes;
  	this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
  	return this.recipes.slice(); //вернет копию recipes таким оразом доступа не будет к основному массиву, только к копии
  }

  getRecipe(index: number){
  	return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
  	this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
  	this.recipes.push(recipe);
  	this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
  	this.recipes[index] = newRecipe;
  	this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
  	this.recipes.splice(index, 1);
  	this.recipesChanged.next(this.recipes.slice());
  }
}