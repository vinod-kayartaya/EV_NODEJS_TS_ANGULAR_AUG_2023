export class Product {
  id?: number;
  name?: string;
  description?: string;
  brand?: string;
  category?: string;
  quantity_per_unit?: string;
  unit_price: number = 0;
  picture?: string;
  discount: number = 0;
}
