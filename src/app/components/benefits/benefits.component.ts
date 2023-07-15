import { Component, OnInit } from '@angular/core';
import { BenefitsServices } from '../../service/benefits.service';
import { Product } from '../../models/products';
import { HttpClientModule } from '@angular/common/http';
import { benefits } from 'src/app/models/benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  productos: benefits = new benefits();
  tabla: any = [];

  constructor(private BenefitsServices: BenefitsServices) { }

  ngOnInit() {
    
    this.BenefitsServices.obtenerBenefits().then((data: any) => {
        this.tabla = data.data; 
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('pues falló');
      });
  }

}
