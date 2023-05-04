import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SRC } from 'src/app/shared/api/api';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-newest-item',
  templateUrl: './newest-item.component.html',
  styleUrls: ['./newest-item.component.css']
})
export class NewestItemComponent implements OnInit {
  @Input() food!:Food;
  //image src...
  image_src = '';
  constructor() { }

  ngOnInit(): void {
       //image src api
    this.image_src = IMAGE_SRC;
  }

}
