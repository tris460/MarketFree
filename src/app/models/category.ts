export class Category implements Category {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  type: string;

  constructor() {
    // Initialize default values
    this.id = '',
    this.name='',
    this.type=''
  }

}
