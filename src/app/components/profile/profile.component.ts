import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  MisPedidos: boolean = false;
  Direccion: boolean = false;
  MisPagos: boolean = false;
  MisMedidas: boolean = false;
  Cupones: boolean = false;
  MisDatos: boolean = false;
  Suscripciones: boolean = false;
  Facturacion: boolean = false;

  toggleDiv(option: string) {
    // Lógica para mostrar u ocultar los divs según la opción seleccionada
    this.MisPedidos = option === 'opcion1';
    this.Direccion = option === 'opcion2';
    this.MisPagos = option === 'opcion3';
    this.MisMedidas = option === 'opcion5';
    this.Cupones = option === 'opcion6';
    this.MisDatos = option === 'opcion7';
    this.Suscripciones = option === 'opcion11';
    this.Facturacion = option === 'opcion12';
  }
  ngOnInit(): void {
  }

}
