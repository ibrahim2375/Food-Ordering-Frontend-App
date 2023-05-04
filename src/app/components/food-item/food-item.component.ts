import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
//icons
import { faHeart,faClock,faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
   //icons
  faHeart = faHeart;
  faClock = faClock;
  faEye =faEye
  
 @Input() food!:Food;
  constructor() { }

  ngOnInit(): void {
  }

}
