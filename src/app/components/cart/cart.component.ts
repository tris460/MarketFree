import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userInfo: any = '';

  constructor(private userService: UserService, private router: Router) { }
  quantity1: number = 1;

  increaseQuantity() {
    this.quantity1++;
  }

  decreaseQuantity() {
    if (this.quantity1 > 1) {
      this.quantity1--;
    }
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      this.router.navigateByUrl('/home');
    }

    this.userService
      .getUserById(userId!)
      .then((data: any) => {
        this.userInfo = data;
        console.log(data); // TODO: Mostrar la información del usuario
      })
      .catch((error) => {
        console.log(`Error getting users: ${error}`);
      });
  }

}
