import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UsersModel } from 'src/app/models/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) { }

  // Variables to read option selected
  MisPedidos: boolean = false;
  Direccion: boolean = false;
  MisPagos: boolean = false;
  MisMedidas: boolean = false;
  Cupones: boolean = false;
  MisDatos: boolean = false;
  Promociones: boolean = false;
  Facturacion: boolean = false;

  toggleDiv(option: string) {
    // Show/hide div with info
    this.MisPedidos = option === 'opcion1';
    this.Direccion = option === 'opcion2';
    this.MisPagos = option === 'opcion3';
    this.MisMedidas = option === 'opcion5';
    this.Cupones = option === 'opcion6';
    this.MisDatos = option === 'opcion7';
    this.Promociones = option === 'opcion11';
    this.Facturacion = option === 'opcion12';
  }

  ngOnInit() {
    this.userService
      .getUsers()
      .then((data: any) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
  }

}
