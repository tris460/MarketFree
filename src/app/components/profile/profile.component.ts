import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any = '';

  constructor(private userService: UserService, public router: Router) { }

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
    this.MisDatos = option === 'opcion7';
    this.Facturacion = option === 'opcion12';
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    this.userService
      .getUserById(userId!)
      .then((data: any) => {
        this.userInfo = data;
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
  }

  goToForm() {
    this.router.navigateByUrl('/form');
  }

}
