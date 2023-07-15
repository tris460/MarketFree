import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { UsersModel } from 'src/app/models/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  productos: UsersModel = new UsersModel();
  tabla: any = [];

  constructor(private UsuariosService: UsuariosService) { }
  // se crean variables para el mjstreo de los botones
  MisPedidos: boolean = false;
  Direccion: boolean = false;
  MisPagos: boolean = false;
  MisMedidas: boolean = false;
  Cupones: boolean = false;
  MisDatos: boolean = false;
  Promociones: boolean = false;
  Facturacion: boolean = false;

  toggleDiv(option: string) {
    // Lógica para mostrar u ocultar los divs según la opción seleccionada
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
    this.UsuariosService
      .obtenerUsuarios()
      .then((data: any) => {
        this.tabla = data.data;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('pues falló');
      });
  }

}
