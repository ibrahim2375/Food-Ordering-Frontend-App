import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
//icons
import { faHeart,faClock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
 //icons
  faHeart = faHeart;
  faClock = faClock;
  foods:Food[] = [];
  constructor(private foodService:FoodService,private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activateRoute.params.subscribe((param) => {
      if(param['query']){
        this.foods = this.foodService.getFoodBySearch(param['query']);
      } else if (param['tag']){
        this.foods = this.foodService.getFoodByTag(param['tag']);
      }
      else {
        this.foods = this.foodService.getAllFood();
      }
    })
  }

}
