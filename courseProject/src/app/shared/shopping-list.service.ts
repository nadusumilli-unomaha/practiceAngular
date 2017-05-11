import { EventEmitter } from '@angular/core'
import { Ingrediant } from './ingrediant.model'

export class ShoppingListService {
	ingrediantsChanged = new EventEmitter<Ingrediant[]>();
	private ingrediants: Ingrediant[] = [
		new Ingrediant('Apples', 12),
		new Ingrediant('Tomatoes', 10),
	];

	getIngrediants() {
		return this.ingrediants.slice();
	}

	addIngrediant(ingrediant: Ingrediant) {
    	this.ingrediants.push(ingrediant);
    	this.ingrediantsChanged.emit(this.ingrediants);
  	}

  	addIngrediants(ingrediants: Ingrediant[]) {
  		this.ingrediants.push(...ingrediants);
  		this.ingrediantsChanged.emit(this.ingrediants.slice());
  	}
}