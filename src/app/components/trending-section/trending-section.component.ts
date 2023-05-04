import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//icons
import {faArrowLeft , faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { scroll_to_left, scroll_to_right } from 'src/app/functions/scroll';
import { ScrollByMouse } from 'src/app/functions/scrollByMouse';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.css']
})
export class TrendingSectionComponent implements OnInit {
    //icons
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight

  mostViewedFood!:Food[];
  @ViewChild('items',{static:true}) elementRef!:ElementRef;

  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {
    // get data
    let FoodObservable:Observable<Food[]>;
      FoodObservable = this.foodService.getMostViewedFood();
      FoodObservable.subscribe((data => {
        this.mostViewedFood = data;
      }))
    ScrollByMouse(this.elementRef);
  }

  scroll_left = () => {
    scroll_to_left(this.elementRef);
  }
  scroll_right = () => {
    scroll_to_right(this.elementRef);
  }
}
