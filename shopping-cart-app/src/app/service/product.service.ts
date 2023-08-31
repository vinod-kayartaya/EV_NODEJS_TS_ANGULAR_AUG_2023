import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandsUrl, categoriesUrl, productsUrl } from 'src/urls';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<any> {
    return this.httpClient.get(brandsUrl);
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(categoriesUrl);
  }

  getProducts(): Observable<any> {
    return this.httpClient.get(productsUrl);
  }

  getProductsByBrand(brand: string): Observable<any> {
    const options = {
      params: {
        brand
      }
    }
    return this.httpClient.get(productsUrl, options);
  }

  getProductsByCategory(category: string): Observable<any> {
    const options = {
      params: {
        category
      }
    }
    return this.httpClient.get(productsUrl, options);
  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get(`${productsUrl}/${id}`);
  }
}
