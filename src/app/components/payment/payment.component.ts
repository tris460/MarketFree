import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  total: any = 0;
  shoppingCartProducts: any[] = [];
  userInfo: any = '';
  productData: any = [];

  constructor(private http:HttpClient, private router: Router, private userService: UserService, private productsService: ProductsService) { }

  async ngOnInit(): Promise<void> {
    const userId = localStorage.getItem('userId');
    const stateData = window.history.state;

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    if(stateData && stateData.total) {
      this.total = stateData.total;
    } else {
      this.router.navigateByUrl('/cart');
    }

    this.userService
      .getUserById(userId!)
      .then((data: any) => {
        this.shoppingCartProducts = data.shoppingCart;

        for (let i = 0; i < this.shoppingCartProducts.length; i++) {
          this.getProductInfo(this.shoppingCartProducts[i]._id);
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
}
