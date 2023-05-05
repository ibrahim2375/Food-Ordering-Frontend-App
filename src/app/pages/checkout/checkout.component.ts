import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { IMAGE_SRC } from 'src/app/shared/api/api';
import { Order } from 'src/app/shared/models/Order';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order:Order = new Order();
  currentUser!:User;
  constructor(private cartService: CartService,private userService: UserService,private router: Router,private orderService: OrderService) {
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    //get current user
    this.currentUser = this.userService.getCurrentUser();
  }
  createOrder() {
    if(this.currentUser){
      this.order.name = this.currentUser.name;
      this.order.address = this.currentUser.address;
    //send order to back end
    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/');
      },error:(error) => {
        alert(error.error);
      }
    })

    } else {
      //if there is no user navigate to login page
      // this.router.navigateByUrl('/login');
      return;
    }
  }
}
