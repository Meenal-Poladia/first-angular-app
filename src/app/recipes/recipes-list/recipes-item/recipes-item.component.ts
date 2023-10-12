import { Component } from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  recipes: Recipe;

  constructor() {
  }

  ngOnInIt(){

  }

}
