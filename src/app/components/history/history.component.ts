import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  userProducts: any = [];

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    this.userService
      .getUserById(userId!)
      .then((data: any) => {
        this.userProducts = data.purchasedProducts;
        console.log(this.userProducts); // TODO: Mostrar los productos comprados
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
  }

}
