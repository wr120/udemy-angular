import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.module";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes : Recipe[] = [
   new Recipe('A Test recipe', 'this is simmply a test', 'http://fb.ru/misc/i/gallery/11333/1235080.jpg')
 ];

  constructor() { }

  ngOnInit() {
  }

}
