import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCartProducts: any[] = [];
  constructor(

    private http:HttpClient,

  ) { }
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
  async ngOnInit() {
    try {
      const userId = localStorage.getItem('userId')
      const products : any = await this.http.get(`http://localhost:3000/users/products-in-cart/${userId}`).toPromise()
      this.shoppingCartProducts = products.shoppingCartProducts;
      console.log(this.shoppingCartProducts)
    } catch (error:any) {
      console.log(error.message)
    }
  }
  //El Dylan Ya me tiene hasta la vrga
  calculateTotal() {
    // Verificamos que haya productos en el carrito antes de sumar los precios
    if (this.shoppingCartProducts && this.shoppingCartProducts.length > 0) {
      // Utilizamos el método reduce() para sumar los precios de los productos
      const total = this.shoppingCartProducts.reduce((accumulator, product) => accumulator + product.price, 0);
      return total;
    }

    return 0; // Retorna 0 si no hay productos en el carrito o el carrito no ha sido cargado aún
  }
}

