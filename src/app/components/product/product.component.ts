import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product = new Product();
  productId: any = '';
  productInfo: any = '';
  promotionId: string = '';
  promotionName: string = '';
  productQuantity = 0;
  productArray: string[] = [];
  userInfo: any = '';
  userId: any = '';

  constructor(
    private productsService: ProductsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    try {
      this.userId = localStorage.getItem('userId');

      this.route.queryParams.subscribe(params => {
        this.productId = params['id'];

        if(this.productId == '' || this.productId == undefined) {
          this.router.navigate(['/']);
        }
      });

      //Get for one product
      this.productInfo = await this.productsService.getProductById(this.productId);
      this.promotionId = this.productInfo.promotion[0]._id;
      this.promotionName = this.productInfo.promotion[0].name;
      this.productQuantity = this.productInfo.quantity;

      for (let i = 1; i <= this.productQuantity; i++) {
        this.productArray.push(`${i}`)
      }

      // Get for user information
      this.userInfo = await this.userService.getUserById(this.userId);

    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }

  addToCart() {
    if(!this.userId) {
      alert('Inicia sesión para agregarlo a tu carrito');
      return;
    }

    this.userInfo.shoppingCart = [...this.userInfo.shoppingCart, this.productInfo];
    this.userService.updateUser(this.userId, this.userInfo)
      .then((product) => alert('Producto agregado al carrito'))
      .catch((err) => console.error(`Error adding product to cart: ${err}`));
  }
}
