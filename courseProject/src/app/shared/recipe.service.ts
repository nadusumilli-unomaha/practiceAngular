import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from '../recipes/recipe.model';
import { Ingrediant } from './ingrediant.model'
import { ShoppingListService } from './shopping-list.service'
 

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('A test Recipe', 'This is simply a test!', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',[new Ingrediant('Bread',2), new Ingrediant('Butter',1), new Ingrediant('Jam', 1)]),
    	new Recipe('Another test Recipe', 'This is simply another test!', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', [new Ingrediant('rice', 1), new Ingrediant('curry' , 1)])
	]

	getRecipes() {
		return this.recipes.slice();
	}

	recipeSelected = new EventEmitter<Recipe>();

	constructor(private slService: ShoppingListService){}

	addIngrediantsToShoppingList(ingrediants: Ingrediant[]) {
		this.slService.addIngrediants(ingrediants);
	}

}