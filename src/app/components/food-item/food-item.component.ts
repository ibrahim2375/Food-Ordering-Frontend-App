import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
//icons
import { faHeart,faClock,faEye } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_SRC } from 'src/app/shared/api/api';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  //icons
  faHeart = faHeart;
  faClock = faClock;
  faEye = faEye
  //image src...
  image_src = '';
@Input() food!:Food;
  constructor() { 
    //image src api
    this.image_src = IMAGE_SRC;
  }

  ngOnInit(): void {
    
  }

}
