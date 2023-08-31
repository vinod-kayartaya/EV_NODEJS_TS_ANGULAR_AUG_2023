import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
})
export class ViewCartComponent {
  constructor(public cartService: CartService) {}

  emptyCart(){
    if(!window.confirm('Are you sure to empty the cart content?')) return;

    this.cartService.emptyCart();
  }
}
