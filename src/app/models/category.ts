export class Category implements Category {
  _id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  type: string;

  constructor() {
    // Initialize default values
    this._id = '',
    this.name='',
    this.type=''
  }

}
