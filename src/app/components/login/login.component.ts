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
  showAlert: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    this.userService
      .loginUser(this.user) // Método loginUser en UserService para realizar la solicitud PUT al servidor
      .then((response: any) => {
        // Suponiendo que el servidor devuelve una respuesta exitosa al inicio de sesión
        const userId = response.data._id;
        localStorage.setItem('userId', userId);

        this.router.navigateByUrl('/home');
      })
      .catch((err: any) => {
        alert("Credenciales incorrectas intenta otra vez")
      });
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
