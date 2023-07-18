import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { PromotionServices } from '../../service/promotions.service';
import { TagsService } from 'src/app/service/tags.service';
import { Product } from '../../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product = new Product();
  productId: any = '';
  productInfo: any;
  promotionId: string = '';
  promotionName: string = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    try {
      this.route.queryParams.subscribe(params => {
        this.productId = params['id'];
      });

      //Get for one product
      this.productInfo = await this.productsService.getProductById(this.productId);
      this.promotionId = this.productInfo.promotion[0]._id;
      this.promotionName = this.productInfo.promotion[0].name;
      console.log(this.promotionId)

      //Get for products
      const products = await this.productsService.getProducts();
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }
}
