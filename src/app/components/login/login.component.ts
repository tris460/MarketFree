import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UsersModel } from 'src/app/models/users';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() salida = new EventEmitter();
  usuario: UsersModel = new UsersModel();

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  registrar(forma: NgForm) {
    console.log(this.usuario);
    this.userService
      .registarUsuario(this.usuario)
      .then((usuario: any) => {
        console.log(usuario);
        forma.reset();
        this.salida.emit();
      })
      .catch((err: any) => {
        console.log(err.console, '', 'error');        
      });
  }
}
