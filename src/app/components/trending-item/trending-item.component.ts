import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SRC } from 'src/app/shared/api/api';
import { Food } from 'src/app/shared/models/Food';



@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.css']
})
export class TrendingItemComponent implements OnInit {
  @Input() food!:Food;
  //image src...
  image_src = '';
  constructor() { 
  }

  ngOnInit(): void {
     //image src api
    this.image_src = IMAGE_SRC;
  }

}
