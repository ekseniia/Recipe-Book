// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService{
	startedEditing = new Subject<number>();
	ingredientsChanged = new Subject<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];

	getIngredients(){
		return this.ingredients.slice(); //копия ингр, а не ориг массив
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}

	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]){
		// for(let ingredient of ingredients){
		// 	this.addIngredient(ingredient);
		// } метод подходит, но слишком много событий вызывается
		this.ingredients.push(...ingredients); //оператор(ES6) ... -> разбивает массив на отдельные элементы
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number, newIngredient: Ingredient){
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number){
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}