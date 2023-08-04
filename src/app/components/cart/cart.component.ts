import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userInfo: any = '';
  cart: any = [];
  productData: any = [];
  total: number = 0;

  constructor(private productsService: ProductsService, private userService: UserService, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    this.userService
      .getUserById(userId!)
      .then((data: any) => {
        this.userInfo = data;
        this.cart = this.userInfo.shoppingCart;

        for (let i = 0; i < this.cart.length; i++) {
          this.getProductInfo(this.cart[i]._id);
        }
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
  }

  async getProductInfo(id: string) {
    let product = await this.productsService.getProductById(id)
    this.productData.push(product);
    this.total += product.price;
  }

  continueToPayment() {
    const navigationExtras: NavigationExtras = {
      state: {
        total: this.total
      }
    };
    this.router.navigate(['/payment'], navigationExtras);
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

