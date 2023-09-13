import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    if (!this.userService.loggedInUser) {
      this.router.navigate(['/login']);
    }
  }
}
