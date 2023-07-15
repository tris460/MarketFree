import { Component, OnInit } from '@angular/core';
import { BenefitsServices } from '../../service/benefits.service';
import { Benefits } from 'src/app/models/benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefits: Benefits = new Benefits();

  constructor(private BenefitsServices: BenefitsServices) { }

  ngOnInit() {
    this.BenefitsServices.getBenefits().then((data: any) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(`Error getting benefits: ${error}`);
      });
  }

}
