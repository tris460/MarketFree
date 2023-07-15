import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category: Category = new Category();
  tabla: any = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
      .getCategories()
      .then((data: any) => {
        this.tabla = data.data;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log(`Error getting categories: ${error}`);
      });
  }

}
