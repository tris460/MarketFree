export interface products {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  price: number;
  description: string;
  discount: number;
  image: string;
  quantity: number;
  publishedDay: string;
  status: boolean;
  review: string[];
  promotion: string[];  //TODO: Validar el tipo, en la BD es un ObjectID
  tags: string[];  //TODO: Validar el tipo, en la BD es un ObjectID
  category: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  user: string;  //TODO: Validar el tipo, en la BD es un ObjectID
}
