import { Component, OnInit } from '@angular/core';
import { faqs } from 'src/app/models/faqs';
import { FaqsService } from 'src/app/service/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  productos: faqs = new faqs();
  tabla: any = [];
  constructor(private FaqsService: FaqsService) { }

  ngOnInit() {
    this.FaqsService
      .obtenerFaqs()
      .then((data: any) => {
        this.tabla = data.data;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('pues falló');
      });
  }

}
