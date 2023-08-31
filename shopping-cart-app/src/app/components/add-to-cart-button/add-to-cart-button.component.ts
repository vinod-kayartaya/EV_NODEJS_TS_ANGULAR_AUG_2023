import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent {
  @Input()
  product: Product = new Product();

  constructor(public cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  decrementQuantity() {
    this.cartService.decrementQuantity(this.product);
  }

  get quantity(): number {
    return this.cartService.getProductQuantity(this.product);
  }
}
