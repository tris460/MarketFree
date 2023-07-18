import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/models/products';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  @Output() salida = new EventEmitter();
  producto: Product = new Product();

  constructor( private ProductsService: ProductsService) { }

  ngOnInit(): void {}
    registrar(forma: NgForm) {
      console.log(this.producto);
      this.ProductsService
      .registarProducto(this.producto)
      .then((producto: any) => {
          console.log(producto);
          forma.reset();
          this.salida.emit();
        })
        .catch((err: any) => {
          console.log(err.console, '', 'error');
        });
    }
}
