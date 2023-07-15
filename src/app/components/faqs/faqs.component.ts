import { Component, OnInit } from '@angular/core';
import { Faqs } from 'src/app/models/faqs';
import { FaqsService } from 'src/app/service/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  faqs: Faqs = new Faqs();
  tabla: any = [];
  constructor(private FaqsService: FaqsService) { }

  ngOnInit() {
    this.FaqsService
      .getFaqs()
      .then((data: any) => {
        this.tabla = data.data;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log(`Error getting FAQs: ${error}`);
      });
  }

}
