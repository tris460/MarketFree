export class faqs implements faqs {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  question: string;
  answer: string;
  category: string;  //TODO: Validar el tipo, en la BD es un ObjectID

constructor(){
  this.id ='',
  this.question ='',
  this.answer = '',
  this.category= ''
}
}
