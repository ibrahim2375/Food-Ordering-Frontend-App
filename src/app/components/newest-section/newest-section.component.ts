import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//icons
import {faArrowLeft , faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { scroll_to_left, scroll_to_right } from 'src/app/functions/scroll';
import { ScrollByMouse } from 'src/app/functions/scrollByMouse';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-newest-section',
  templateUrl: './newest-section.component.html',
  styleUrls: ['./newest-section.component.css']
})
export class NewestSectionComponent implements OnInit {
    //icons
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight

  latestFood!:Food[];
  @ViewChild('items',{static:true}) elementRef!:ElementRef;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
     // get data
    let FoodObservable:Observable<Food[]>;
      FoodObservable = this.foodService.getLatestFood();
      FoodObservable.subscribe((data => {
        this.latestFood = data;
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
