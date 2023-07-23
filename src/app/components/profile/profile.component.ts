import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any = '';

  constructor(private userService: UserService, private router: Router) { }

  // Variables to read option selected
  Direccion: boolean = false;
  MisDatos: boolean = false;
  Promociones: boolean = false;

  toggleDiv(option: string) {
    // Show/hide div with info
    this.Direccion = option === 'opcion2';
    this.MisDatos = option === 'opcion7';
  }

  ngOnInit() {
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

  goToForm() {
    this.router.navigateByUrl('/form');
  }
  goToHistory() {
    this.router.navigateByUrl('/history');
  }

}
