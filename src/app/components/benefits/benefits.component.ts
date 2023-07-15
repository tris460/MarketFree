import { Component, OnInit } from '@angular/core';
import { BenefitsServices } from '../../service/benefits.service';
import { Benefits } from 'src/app/models/benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefitsData: Benefits[] = [];

  constructor(private benefitsServices: BenefitsServices) { }

  ngOnInit() {
    this.benefitsServices.getBenefits()
      .then((data: any) => {
        this.benefitsData = data.data;
      })
      .catch((error) => {
        console.log(`Error getting benefits: ${error}`);
      });
  }

}
