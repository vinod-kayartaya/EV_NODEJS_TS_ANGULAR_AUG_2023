import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  authorName: string = 'vinod kumar kayartaya';
  authorEmail: string = 'VINOD@VINOD.CO';
  num: number = 15;
  book: any = {
    title: 'Let us C',
    price: 299,
    author: 'Yashwant Kanitkar',
  };

  customers: Array<any> = [];
  pageSize = 50;
  startIndex: number =0;
  endIndex: number = 50;

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('./assets/customers.json')
      .subscribe((resp) => (this.customers = resp as Array<any>));
  }

  previousPage(){
    if(this.startIndex===0) return;
    
    this.startIndex -= this.pageSize;
    this.endIndex -= this.pageSize;
  }

  nextPage(){
    this.startIndex += this.pageSize;
    this.endIndex += this.pageSize;
  }
}
