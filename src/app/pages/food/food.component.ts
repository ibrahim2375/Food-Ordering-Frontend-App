import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
//icons
import { faHeart,faClock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  faHeart = faHeart
  food!:Food;
  constructor(private activateRoute: ActivatedRoute,private foodService:FoodService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      if(param['id']){
        this.food = this.foodService.getFoodById(param['id']);
      }
    })
  }

}
