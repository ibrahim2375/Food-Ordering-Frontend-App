import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { sample_foods, sample_tags } from 'src/data';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFood():Food[] {
    return sample_foods;
  }
  // search method
  getFoodBySearch(query:string){
    return this.getAllFood().filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getFoodByTag(tag:string):Food[] {
  return tag == 'All' ? this.getAllFood() : this.getAllFood().filter(food => food.tags?.includes(tag)); 
  }
  getFoodById(id:string):Food {
    return this.getAllFood().find(food => food.id == id) ?? new Food();
  }
}
