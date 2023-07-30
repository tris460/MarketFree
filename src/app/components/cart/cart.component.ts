import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCartProducts: any[] = [];
  productId: any = '';
  constructor(
    private router:Router,
    private http:HttpClient,
  ) { }

  quantity1: number = 1;

  increaseQuantity() {
    this.quantity1++;
  }

  decreaseQuantity() {
    if (this.quantity1 > 1) {
      this.quantity1--;
    }
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    this.userService
      .getUserById(userId!)
      .then((data: any) => {
        this.userInfo = data;
        console.log(data); // TODO: Mostrar la información del usuario
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
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
  
  calculateTotal() {
    // Verificamos que haya productos en el carrito antes de sumar los precios
    if (this.shoppingCartProducts && this.shoppingCartProducts.length > 0) {
      // Utilizamos el método reduce() para sumar los precios de los productos
      const total = this.shoppingCartProducts.reduce((accumulator, product) => accumulator + product.price, 0);
      return total;
    }

    return 0; // Retorna 0 si no hay productos en el carrito o el carrito no ha sido cargado aún
  }

  async deleteFromCart(id:any){

    const userId = localStorage.getItem('userId');
    try {
      
      const productId= id;

      const deletedProduct:any = await this.http.patch(`http://localhost:3000/users/${userId}/delete-from-cart`,{productId}).toPromise()
      console.log(deletedProduct)

      // Recargar la página actual
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cart']);
      
    });
    } catch(error:any) {
      console.error(error.message)
    }
  }

}

