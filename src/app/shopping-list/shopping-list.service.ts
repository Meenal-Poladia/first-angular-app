import {Injectable} from "@angular/core";

import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  // ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
}
