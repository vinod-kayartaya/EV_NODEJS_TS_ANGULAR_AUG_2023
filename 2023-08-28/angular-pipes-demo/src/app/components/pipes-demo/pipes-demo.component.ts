import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent {
  productName: string = 'apple HIMACHAL';
  unitPrice: number = 215;

  now = new Date();

  customer = {
    id: 1,
    first_name: 'Willy',
    last_name: 'Strevens',
    gender: 'F',
    email: 'wstrevens0@nhs.uk',
    phone: '727-701-0678',
    birth_date: '1971-10-14',
  };
}
