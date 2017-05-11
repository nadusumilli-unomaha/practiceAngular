import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model'
import { ShoppingListService } from '../shared/shopping-list.service'
 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingrediants: Ingrediant[] = [];
  
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingrediants = this.shoppingList.getIngrediants();
    this.shoppingList.ingrediantsChanged.subscribe(
    		(ingrediants: Ingrediant[]) => {
    			this.ingrediants = ingrediants;
    		}
    	);
  }

}
