import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../shared/recipe.service'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	// This is the used to bind and get the data from the parent template.
	/*
		@Output is used to send data from the child component to the parent component
		ElementRef is used to make a reference of a html element.
	*/
	@Input()recipe: Recipe;

	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
	}

	showDetail() {
		this.recipeService.recipeSelected.emit(this.recipe);
	}

}
