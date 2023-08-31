import { Product } from './product';

export class LineItem {
  quantity: number = 1;

  constructor(public product: Product) {}

}
