import { Component, OnInit } from '@angular/core';
//icons
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { IMAGE_SRC } from 'src/app/shared/api/api';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { User } from 'src/app/shared/models/User';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 //icons
faTrash = faTrash;
cart!:Cart;
user!: User;
quntityOptions:any = [1,2,3,4,5,6,7,8,9,10];
  //image src...
  image_src = '';
  constructor(private cartService: CartService,private userService: UserService) {
    this.user = userService.user;
       //image src api
    this.image_src = IMAGE_SRC;
  }

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart;
    })
  }
  removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  }
  changeItemQuantity(cartItem:CartItem,quantity:string){
    const quantityNumber = parseInt(quantity);
    this.cartService.changeItemQuantity(cartItem.food.id, quantityNumber);
  }
}
