import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart;
    })
  }

}
