import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/models/products';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/category';
import { TagsService } from 'src/app/service/tags.service';
import { Tags } from 'src/app/models/tags';
import { PromotionServices } from 'src/app/service/promotions.service';
import { Promotions } from 'src/app/models/promotions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  @Output() output = new EventEmitter();
  product: Product = new Product();
  categoriesData: Category[] = [];
  tagsData: Tags[] = [];
  promotionsData: Promotions[] = [];
  showAlert: boolean = false;
  selectedCategory: Category | null = null;
  selectedTag: Tags | null = null;

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private tagsService: TagsService,
    private promotionService: PromotionServices,
    private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      this.router.navigateByUrl('/login');
    }

    // Get categories
    this.categoryService
      .getCategories()
      .then((data: any) => {
        this.categoriesData = data.data.filter((data: any) => data.type === "products");
      })
      .catch((error) => {
        console.log(`Error getting categories: ${error}`);
      });

    // Get tags
    this.tagsService
      .getTags()
      .then((data: any) => {
        this.tagsData = data.data;
      })
      .catch((error) => {
        console.log(`Error getting tags: ${error}`);
      });

    // Get promotions
    this.promotionService
    .getPromotions()
    .then((data: any) => {
      this.promotionsData = data.data;
    })
    .catch((error) => {
      console.log(`Error getting tags: ${error}`);
    });
  }

  register(form: NgForm) {
    this.productsService
    .addProduct(this.product)
    .then((product: any) => {
      form.reset();
      this.output.emit();

      const id = product.data._id;
      this.router.navigate(['/product'], { queryParams: { id: id } });
    })
    .catch((err: any) => {
      console.error(`Error registering product: ${JSON.stringify(err)}`);
    });
  }

}

