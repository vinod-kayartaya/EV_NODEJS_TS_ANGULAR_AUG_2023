import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<any> = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((qp) => {
      if ('brand' in qp) {
        this.productService
          .getProductsByBrand(qp['brand'])
          .subscribe((resp) => (this.products = resp));
      } else if ('category' in qp) {
        this.productService
          .getProductsByCategory(qp['category'])
          .subscribe((resp) => (this.products = resp));
      } else {
        this.productService
          .getProducts()
          .subscribe((resp) => (this.products = resp));
      }
    });
  }
}
