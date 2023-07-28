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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.router.navigateByUrl('/home');
    }
  }

  async login() {
    try {
      const response = await this.userService.loginUser(this.user.email, this.user.password);
      
      if (response.ok) {
        console.log('Login successful!');
        localStorage.setItem('userId', response.token); // Store the token in localStorage or perform any other login-related actions
        this.router.navigateByUrl('/home');
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
      .then((response: any) => {
        form.resetForm();
        this.output.emit();

        const userId = response.data._id;
        localStorage.setItem('userId', userId);

        this.router.navigateByUrl('/home');
      })
      .catch((err: any) => {
        console.log(err, 'error');
      });
  }
}
