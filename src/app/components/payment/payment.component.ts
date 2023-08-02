import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  total: any = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    const stateData = window.history.state;

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    if(stateData && stateData.total) {
      this.total = stateData.total;
      console.log(this.total); //TODO: Realizar el cobro
    } else {
      this.router.navigateByUrl('/cart');
    }

  }

}
