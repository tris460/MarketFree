import { Component, OnInit } from '@angular/core';
import { Benefits } from 'src/app/models/benefits';
import { BenefitsServices } from 'src/app/service/benefits.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  benefitsData: Benefits[] = [];

  constructor(private categoryService: CategoryService, private benefitsServices: BenefitsServices) { }

  ngOnInit() {
    // Get categories
    this.categoryService
      .getCategories()
      .then((data: any) => {
        console.log(data.data);
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
  }

}
