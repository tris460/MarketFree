import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesData: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
      .getCategories()
      .then((data: any) => {
        this.categoriesData = data.data.filter((obj: any) => obj.type === "products");
      })
      .catch((error) => {
        console.log(`Error getting categories: ${error}`);
      });
  }

}
