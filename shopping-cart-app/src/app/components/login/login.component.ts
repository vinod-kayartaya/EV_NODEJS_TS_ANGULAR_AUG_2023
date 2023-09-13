import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.userService.loggedInUser) {
      // you have already logged in, so, do not display the login form
      // redirect the user to the dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  success = () => {
    this.router.navigate(['/dashboard']);
  };

  failure = (errorMessage: string) => {
    this.errorMessage = errorMessage;
  };

  handleSubmit = () => {
    this.userService.login(
      this.email,
      this.password,
      this.success,
      this.failure
    );
  };
}
