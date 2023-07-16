import { Category } from "./category";
import { Promotions } from "./promotions";
import { Tags } from "./tags";

export class Product implements Product {
  id: string;
  name: string;
  price: number;
  description: string;
  discount: number;
  image: string;
  quantity: number;
  publishedDay: string;
  status: boolean;
  review: string[];
  promotion: Promotions;
  tags: Tags;
  category: Category;

  constructor() {
    let date = new Date().toDateString();

    // Initialize default values
    this.id = '';
    this.name = '';
    this.price = 0;
    this.description = '';
    this.discount = 0;
    this.image = '';
    this.quantity = 0;
    this.publishedDay = date;
    this.status = false;
    this.review = [];
    this.promotion = new Promotions();
    this.tags = new Tags();
    this.category = new Category();
  }
}
