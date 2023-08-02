import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categoriesData: Category[] = [];
  userId:any = '';

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    // console.log(this.userId)

    this.categoryService
      .getCategories()
      .then((data: any) => {
        this.categoriesData = data.data.filter((obj: any) => obj.type === "products");
        this.categoriesData.map((category: any) => {
          console.log(category._id);
        });
      })
      .catch((error) => {
        console.log(`Error getting categories: ${error}`);
      });
  }

  navigateToCategory(id: string ) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/category'], { queryParams: { category: id } });
    });
  }

  logout() {
    localStorage.removeItem('userId');
    location.reload();
  }
}