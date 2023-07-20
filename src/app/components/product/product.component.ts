import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { PromotionServices } from '../../service/promotions.service';
import { TagsService } from 'src/app/service/tags.service';
import { Product } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
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
      this.productQuantity = this.productInfo.quantity;

      for (let i = 1; i <= this.productQuantity; i++) {
        this.productArray.push(`${i}`)
      }
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }
}
