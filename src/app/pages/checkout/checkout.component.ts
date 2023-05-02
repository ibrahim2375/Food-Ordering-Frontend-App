import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private cartService: CartService,private userService: UserService,private router: Router) {
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
      console.log(this.order);
    } else {
      //if there is no user navigate to login page
      // this.router.navigateByUrl('/login');
      return;
    }
  }
}
