import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Cart } from 'src/app/shared/models/Cart';
import { User } from 'src/app/shared/models/User';
//icons 
import {faShoppingBag , faList } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart!:Cart;
  user!:User;
  //icons
  faShoppingBag = faShoppingBag;
  faList = faList;

  constructor(private cartService:CartService,private userService:UserService) {
    this.cartService.getCartObservable().subscribe(cart => {
    this.cart = cart;
    })

    this.userService.userObservable.subscribe(newuser => {
    this.user = newuser;
    })
  }
  ngOnInit(): void {
    // get user data from observable variable if exit
    console.log(this.user.email)
  }


  logout() {
    this.userService.logout();
  }
  get isLoggedIn() {
    return  this.user.email;
  }

}
