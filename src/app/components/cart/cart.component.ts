import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  quantity1: number = 1;

  increaseQuantity1() {
    this.quantity1++;
  }

  decreaseQuantity1() {
    if (this.quantity1 > 1) {
      this.quantity1--;
    }
  }
  quantity2: number = 1;

  increaseQuantity2() {
    this.quantity2++;
  }

  decreaseQuantity2() {
    if (this.quantity2 > 1) {
      this.quantity2--;
    }
  }
  quantity3: number = 1;

  increaseQuantity3() {
    this.quantity3++;
  }

  decreaseQuantity3() {
    if (this.quantity3 > 1) {
      this.quantity3--;
    }
  }
  ngOnInit(): void {
  }
}
