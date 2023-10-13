import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/GSWevhC8gHaBZShMB40_OrEj8tI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-458e6e6c3ef447bf8261ee4070449754.jpg')
  ];

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
