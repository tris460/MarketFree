export class Benefits implements Benefits {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  description: string;
  image : string;

  constructor() {
    // Initialize default values
    this.id = '';
    this.name = '';
    this.description = '';
    this.image = '';
  }
}

