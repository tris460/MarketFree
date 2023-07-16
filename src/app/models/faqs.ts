export class Faqs implements Faqs {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  question: string;
  answer: string;
  category: string;  //TODO: Validar el tipo, en la BD es un ObjectID

constructor() {
  // Initialize default values
  this.id ='',
  this.question ='',
  this.answer = '',
  this.category= ''
}
}
