import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../service/payment.service';
import { PaymentInfo } from 'src/app/models/payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  cardNumber: number = 0;
  cardHolder: string = "";
  expirationDate: string = "";
  cvv: number = 0;

  constructor( private paymentService: PaymentService, private router: Router) { }

  ngOnInit() {}

  async submitForm() {
    console.log("entrando")
    console.log(this.cardNumber, this.cardHolder, this.expirationDate, this.cvv)

    const paymentInfo: PaymentInfo = {
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expirationDate: this.expirationDate,
      cvv: this.cvv
    };

    try {
      const response = await this.paymentService.validatePayment(paymentInfo);
      console.log('Respuesta del servicio:', response);

      this.router.navigateByUrl('/cart');

    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  }

}
