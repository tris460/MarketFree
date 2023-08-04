import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  shoppingCartProducts: any[] = [];
  constructor(private http:HttpClient,) { }
  quantity1: number = 1;
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
