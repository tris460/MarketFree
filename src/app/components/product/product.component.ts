import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { PromotionServices } from '../../service/promotions.service';
import { TagsService } from 'src/app/service/tags.service';
import { Product } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private http : HttpClient,
    private router: Router) { }

  async ngOnInit() {
    try {
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

      console.log(this.productInfo)

      //Get for products
      const products = await this.productsService.getProducts();
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }
  async addToCart(){

    const userId = localStorage.getItem('userId');
    try {
      this.route.queryParams.subscribe(params => {
        this.productId = params['id'];

        if(this.productId == '' || this.productId == undefined) {
          this.router.navigate(['/']);
        }
      });
      const productId= this.productId

      const addedProduct:any = await this.http.post(`http://localhost:3000/users/${userId}/add-to-cart`,{productId}).toPromise()
      if(!addedProduct.ok){
        this.router.navigate(['/']);
      }
      this.router.navigate(['/cart'])
    } catch(error:any) {
      console.error(error.message)
    }
  }
}
