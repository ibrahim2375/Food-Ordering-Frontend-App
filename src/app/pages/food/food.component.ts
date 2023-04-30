import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
//icons
import { faHeart,faClock } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  faHeart = faHeart
  food!:Food;
  constructor(private activateRoute: ActivatedRoute,private foodService:FoodService,private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      if(param['id']){
        this.foodService.getFoodById(param['id']).subscribe(data => {
          this.food = data;
        });
      }
    })
  }
  // add to cart
  addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart');
  }

}
