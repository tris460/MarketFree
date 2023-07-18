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
  promotion: string[];
  tags: string[];
  category: string[];

  constructor() {
    // Initialize default values
    this.id = '';
    this.name = '';
    this.price = 0;
    this.description = '';
    this.discount = 0;
    this.image = '';
    this.quantity = 0;
    this.publishedDay = '';
    this.status = false;
    this.review = [];
    this.promotion = [];
    this.tags = [];
    this.category = [];
  }
}
