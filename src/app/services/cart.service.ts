import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart: Cart = this.getCartFromLocalStorage();
private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }
  // set cart data to local storge
private setCartToLocalStorage():void {
  // get total price
  this.cart.totalPrice = this.cart.items.reduce((prev, current) => prev + current.price,0);
  // get total count
  this.cart.totalCount = this.cart.items.reduce((prev, current) => prev + current.quantity,0);
  //save to local storage
  const cartItems = JSON.stringify(this.cart);
  localStorage.setItem('cart', cartItems);
  this.cartSubject.next(this.cart);
}
// get cart items from local storage
private getCartFromLocalStorage():Cart {
  let cartItems = localStorage.getItem('cart');
  return cartItems? JSON.parse(cartItems): new Cart();
}
addToCart(food: Food): void {
  let cartItem = this.cart.items.find(item => item.food.id === food.id);
  if(cartItem) {
    return;
  }
  this.cart.items.push(new CartItem(food));
  this.setCartToLocalStorage();

}
removeFromCart(id: string): void {
this.cart.items = this.cart.items.filter(item => item.food.id !== id);
this.setCartToLocalStorage();
}
changeItemQuantity(id: string, quantity: number): void {
  let cartItem = this.cart.items.find(item => item.food.id === id);
  if(!cartItem) {return;}
  cartItem.quantity = quantity;
  cartItem.price = quantity * cartItem.food.price;
  this.setCartToLocalStorage();
}
clearCart(){
  this.cart = new Cart();
  this.setCartToLocalStorage();
}
getCartObservable(): Observable<Cart>{
  return this.cartSubject.asObservable();
}

getCart():Cart {
  return this.cartSubject.value;
}
}
