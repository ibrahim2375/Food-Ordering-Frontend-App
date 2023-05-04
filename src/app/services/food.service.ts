import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { FOODS_API, FOODS_BY_ID, FOODS_LATEST, FOODS_MOST_VIEWS, FOOD_TAGS } from '../shared/api/api';
import { FOODS_BY_SEARCH } from '../shared/api/api';
import { FOODS_BY_TAG } from '../shared/api/api';
// import { sample_foods, sample_tags } from 'src/data';
//api

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAllFood():Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_API) ;
  }
  // search method
  getFoodBySearch(query:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH + query) ;
  }
  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOOD_TAGS) ;
  }
  getFoodByTag(tag:string):Observable<Food[]> {
  return tag == 'All' ? this.getAllFood() : this.http.get<Food[]>(FOODS_BY_TAG+ tag); 
  }
  getFoodById(id:string):Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID + id) ;
  }
  getMostViewedFood():Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_MOST_VIEWS) ;
  }
  getLatestFood():Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_LATEST) ;
  }
}
