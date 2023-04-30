import { Component, OnInit } from '@angular/core';
//icons
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 //icons
faTrash = faTrash;
cart!:Cart;
quntityOptions:any = [1,2,3,4,5,6,7,8,9,10];
  constructor(private cartService: CartService) { }

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
