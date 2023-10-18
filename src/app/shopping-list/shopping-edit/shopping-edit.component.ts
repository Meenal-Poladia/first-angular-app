import {Component, ElementRef, ViewChild} from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingList: ShoppingListService) {
  }

  onAddItem() {
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingList.addIngredient(newIngredient);
  }
}
