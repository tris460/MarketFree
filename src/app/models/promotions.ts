export class promotions implements promotions {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  description: string;

  constructor(){
    this.id='',
    this.name='',
    this.description=''
  }

}