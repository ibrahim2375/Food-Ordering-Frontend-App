import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SRC } from 'src/app/shared/api/api';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-items-list',
  templateUrl: './order-items-list.component.html',
  styleUrls: ['./order-items-list.component.css']
})
export class OrderItemsListComponent implements OnInit {
  @Input() order!:Order;
  //image src...
  image_src = '';
  constructor() { }

  ngOnInit(): void {
    //image src api
    this.image_src = IMAGE_SRC;
  }

}
