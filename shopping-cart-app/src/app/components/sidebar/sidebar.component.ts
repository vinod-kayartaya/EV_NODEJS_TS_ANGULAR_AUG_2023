import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  brands: Array<string> = [];
  categories: string[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getBrands().subscribe((resp) => (this.brands = resp));
    this.service.getCategories().subscribe((resp) => (this.categories = resp));
  }
}
