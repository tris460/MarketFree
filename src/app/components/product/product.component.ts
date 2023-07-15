import {  Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { PromotionServices } from '../../service/promotions.service';
import { TagsService } from 'src/app/service/tags.service';
import { Product } from '../../models/products';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product = new Product();

  constructor(private productsService: ProductsService, private promotionServices: PromotionServices, private tagsService: TagsService ) { }

  ngOnInit() {
    //Get for products
    this.productsService
      .getProducts()
      .then((data: any) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(`Error getting products: ${error}`);
      });
    //Get for promotions
    this.promotionServices
      .getPromotions()
      .then((data: any) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(`Error getting promotions: ${error}`);
      });
    // Get for tags
    this.tagsService
      .getTags()
      .then((data: any) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(`Error getting tags: ${error}`);
      });
  }

}
