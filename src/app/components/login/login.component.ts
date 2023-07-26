import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UsersModel } from 'src/app/models/users';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() output = new EventEmitter();
  user: UsersModel = new UsersModel();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.router.navigateByUrl('/home');
    }
  }


  async login() {
    try {
      const user = await this.userService.loginUser(this.user.email, this.user.password);
      // Check if the user exists and the credentials are correct
      if (user) {
        console.log('Login successful!');
        const userId = '9f8e4d3c2b1a0f7e6d5c4b3a';
        localStorage.setItem('userId', userId);
        // Store the user ID in localStorage or perform any other login-related actions
      } else {
        console.log('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.log('Error occurred during login:', error);
    }
  }

  register(form: NgForm) {
    this.userService
      .registerUser(this.user)
      .then((user: any) => {
        form.reset();
        this.output.emit();

        const userId = user.data._id;
        localStorage.setItem('userId', userId);

        this.router.navigateByUrl('/home');
      })
      .catch((err: any) => {
        console.log(err.console, '', 'error');
      });
  }
}
