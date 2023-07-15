import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoria: category = new category();
  tabla: any = [];
  constructor(private CategoryaService: CategoriaService) { }

  ngOnInit() {
    this.CategoryaService
      .obtenerCategorias()
      .then((data: any) => {
        this.tabla = data.data;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('pues falló');
      });
  }

}
