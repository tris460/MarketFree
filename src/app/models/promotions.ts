export class Promotions implements Promotions {
  _id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  description: string;

  constructor() {
    // Initialize default values
    this._id='',
    this.name='',
    this.description=''
  }

}
