import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/GSWevhC8gHaBZShMB40_OrEj8tI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-458e6e6c3ef447bf8261ee4070449754.jpg',
      [
        new Ingredient('Almonds', 2),
        new Ingredient('Raisins', 8)
      ]
    ),
    new Recipe(
      'Walnuts and Pecans',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/GSWevhC8gHaBZShMB40_OrEj8tI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-458e6e6c3ef447bf8261ee4070449754.jpg',
      [
        new Ingredient('Pecans', 2),
        new Ingredient('Walnuts', 8)
      ]
    )
  ];

  constructor(private shoppingList: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updaterecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
