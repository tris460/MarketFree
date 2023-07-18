import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryId = '';
  products:any[] = [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category'];
    });

    this.productsService
      .getProducts()
      .then((data: any) => {
        this.products = data.data.filter((p: any) =>{
          return p.category[0]._id == this.categoryId;
        });
        console.log(this.products)
      })
      .catch((error) => {
        console.error(`Error getting products: ${error}`);
      });
  }


}
