import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipeService } from '../shared/recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

	selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

 	//This recipeService event subscriber is coming from the recipe item. Where the item is selected and emitted.
  ngOnInit() {
  	this.recipeService.recipeSelected.subscribe(
  			(recipe: Recipe) => {
  				this.selectedRecipe = recipe;
  			}
  		);
  }

}
