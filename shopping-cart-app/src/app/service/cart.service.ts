import { Injectable } from '@angular/core';
import { LineItem } from '../model/line-item';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: LineItem[] = [];

  constructor() {
    // read from the localStorage and restore the cart content (if exists)
    if ('cart' in localStorage) {
      let cartStr = localStorage.getItem('cart');
      if (cartStr != null) {
        this.cart = JSON.parse(cartStr);
      }
    }
  }

  persist() {
    // save the current cart state to localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getProductQuantity(product: Product): number {
    let item = this.cart.find((li) => li.product.id === product.id);
    if (item) return item.quantity;
    return 0;
  }

  get itemCount(): number {
    if (this.cart.length === 0) return 0;

    return this.cart // array of line-items
      .map((li) => li.quantity) // array of quantities
      .reduce((a, b) => a + b); // sum of all quantities
  }

  addToCart(product: Product): void {
    let item = this.cart.find((li) => li.product.id === product.id);
    if (item) {
      // item exists in the cart
      item.quantity++;
    } else {
      this.cart.push(new LineItem(product));
    }
    this.persist();
  }

  decrementQuantity(product: Product): void {
    let index = this.cart.findIndex((li) => li.product.id === product.id);
    if (index === -1) return;

    let item = this.cart[index];
    if (item.quantity === 1) {
      // remove from the cart
      this.cart.splice(index, 1);
    } else {
      item.quantity--;
    }
    this.persist();
  }

  get totalAmount(): number {
    if (this.cart.length === 0) return 0;

    return this.cart
      .map(
        (li) =>
          (li.product.unit_price * li.quantity * (100 - li.product.discount)) /
          100
      )
      .reduce((a, b) => a + b);
  }

  get totalDiscount(): number {
    if (this.cart.length === 0) return 0;

    return this.cart
      .map(
        (li) =>
          (li.product.unit_price * li.quantity * li.product.discount) / 100
      )
      .reduce((a, b) => a + b);
  }

  emptyCart() {
    this.cart = [];
    this.persist();
  }
}
