import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userInfo: any = '';
  userUpdated: any = '';
  userId: any = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    if(!this.userId) {
      this.router.navigateByUrl('/home');
    }

    this.userService
      .getUserById(this.userId!)
      .then((data: any) => {
        this.userInfo = data;
        this.userUpdated = this.userInfo;
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
  }

  updateUser() {
    this.userService
      .updateUser(this.userId, this.userUpdated)
      .then((user) => {
        alert('Datos actualizados correctamente');
        console.log(this.userUpdated);
        
        this.router.navigateByUrl('/profile');
      })
      .catch((err) => {
        console.error(`Error updating user: ${err}`);
      })
  }

  updateName(value: any) {
    this.userUpdated.name = value;
  }

  updateLastname(value: any) {
    this.userUpdated.lastname = value;
  }

  updateEmail(value: any) {
    this.userUpdated.email = value;
  }

  updateAddress(value: any) {
    this.userUpdated.address = value;
  }

  updatePassword(value: any) {
    this.userUpdated.password = value;
  }

}
