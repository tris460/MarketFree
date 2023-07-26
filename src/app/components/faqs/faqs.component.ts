import { Component, OnInit } from '@angular/core';
import { Faqs } from 'src/app/models/faqs';
import { FaqsService } from 'src/app/service/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  faqsData: Faqs[] = [];
  faqsByCategory: any = [];

  constructor(private FaqsService: FaqsService) { }

  ngOnInit() {
    this.FaqsService
      .getFaqs()
      .then((data: any) => {
        this.faqsData = data.data;

        const categoriesGroup = this.faqsData.reduce((accumulator: any, question: any) => {
          const categoryName = question.category.name;

          if (!accumulator[categoryName]) {
            accumulator[categoryName] = [];
          }

          accumulator[categoryName].push(question);

          return accumulator;
        }, {});

        this.faqsByCategory = Object.entries(categoriesGroup).map(([categoryName, questions]) => ({
          categoryName,
          questions
        }));
      })
      .catch((error) => {
        console.log(`Error getting FAQs: ${error}`);
      });
  }

}
