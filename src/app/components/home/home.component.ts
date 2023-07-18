import { Component, OnInit } from '@angular/core';
import { Benefits } from 'src/app/models/benefits';
import { Product } from 'src/app/models/products';
import { BenefitsServices } from 'src/app/service/benefits.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  benefitsData: Benefits[] = [];
  productsData: Product[] = [];
  productsByCategory: any;

  constructor(private categoryService: CategoryService, private benefitsServices: BenefitsServices, private productsService: ProductsService) { }

  ngOnInit() {
    // Get categories
    this.categoryService
      .getCategories()
      .then((data: any) => {
        //console.log(data.data);
      })
      .catch((error) => {
        console.log(`Error getting categories: ${error}`);
      });

    // Get benefits
    this.benefitsServices.getBenefits()
      .then((data: any) => {
        this.benefitsData = data.data;
      })
      .catch((error) => {
        console.log(`Error getting benefits: ${error}`);
      });

    // Get products
    this.productsService.getProducts()
      .then((data: any) => {
        this.productsData = data.data;

        const productsGroup = this.productsData.reduce((accumulator: any, product: any) => {
          const categoryName = product.category[0].name;

          if (!accumulator[categoryName]) {
            accumulator[categoryName] = [];
          }

          accumulator[categoryName].push(product);

          return accumulator;
        }, {});

        this.productsByCategory = Object.entries(productsGroup).map(([categoryName, products]) => ({
          categoryName,
          products
        }));

        console.log(this.productsByCategory)
      })
      .catch((error) => {
        console.log(`Error getting products: ${error}`);
      });
  }

}
