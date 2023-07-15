import {  Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { PromotionServices } from '../../service/promotions.service';
import { promotions } from 'src/app/models/promotions';
import { tags } from 'src/app/models/tags';
import { TagsService } from 'src/app/service/tags.service';
import { Product } from '../../models/products';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productos: Product = new Product();
  tablaProduct: any = [];
  tablaPromotions: any = [];
  tablaTags: any = [];

  constructor(private ProductosService: ProductosService, private PromotionServices: PromotionServices, private TagsService: TagsService ) { }

  ngOnInit() {
    //Get para los productos
    this.ProductosService
      .obtenerProductos()
      .then((data: any) => {
        this.tablaProduct = data.data;
        console.log(this.tablaProduct);
      })
      .catch((error) => {
        console.log('pues falló');
      });
      //Get para las promociones
      this.PromotionServices
      .obtenerPromotions()
      .then((data: any) => {
        this.tablaPromotions = data.data;
        console.log(this.tablaPromotions);
      })
      .catch((error) => {
        console.log('pues falló');
      });
      // Get para las Tags
      this.TagsService
      .obtenerTags()
      .then((data: any) => {
        this.tablaTags = data.data;
        console.log(this.tablaTags);
      })
      .catch((error) => {
        console.log('pues falló');
      });
  }

}
