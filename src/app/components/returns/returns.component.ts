import { Component, OnInit } from '@angular/core';
import { Refunds } from 'src/app/models/refunds';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  showAlert: boolean | null = false;
  refunds: { _id: number | null, motive: string | null } = { _id: null, motive: null };
  selectedMethod: Refunds | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  updateOrderId(value: any) {
    this.refunds._id = value ? Number(value) : null;
  }

  updateMotive(value: any) {
    this.refunds.motive = value;
  }

  submitRefund(form: NgForm){
    this.showAlert = form.invalid;

    // Simulación de validación del número de orden (reemplaza esta parte con tu lógica real)
    if (!this.refunds._id) {
      alert("Orden no encontrada.");
    } else {
      alert("Devolución enviada correctamente.");
      // Resto de la lógica para enviar la devolución si el número de orden existe
    }
  }

}
