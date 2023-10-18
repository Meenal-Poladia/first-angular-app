import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/GSWevhC8gHaBZShMB40_OrEj8tI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-458e6e6c3ef447bf8261ee4070449754.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.eatingwell.com/thmb/GSWevhC8gHaBZShMB40_OrEj8tI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Eat-the-Rainbow-Chopped-Salad-with-Basil-Mozzarella-458e6e6c3ef447bf8261ee4070449754.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
