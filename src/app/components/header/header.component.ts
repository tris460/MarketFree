import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categoriesData: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
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
