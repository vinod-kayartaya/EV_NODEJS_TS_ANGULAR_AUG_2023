import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl } from 'src/urls';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInUser: any | undefined; // id, name, token

  constructor(
    private httpClient: HttpClient,
    private cartService: CartService,
    private router: Router
  ) {
    if ('loggedInUser' in localStorage) {
      let loggedInUserStr = localStorage.getItem('loggedInUser');
      if (loggedInUserStr) {
        this.loggedInUser = JSON.parse(loggedInUserStr);
      }
    }
  }

  login(email: string, password: string, success: Function, failure: Function) {
    this.httpClient.post(loginUrl, { email, password }).subscribe(
      (resp) => {
        this.loggedInUser = resp;
        localStorage.setItem('loggedInUser', JSON.stringify(resp));
        success();
      },
      (err: any) => {
        failure(err.error);
      }
    );
  }

  logout() {
    this.loggedInUser = undefined;
    localStorage.removeItem('loggedInUser');
    this.cartService.emptyCart();
    this.router.navigate(['/login']);
  }
}
