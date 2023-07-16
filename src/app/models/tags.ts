export class tags implements tags {
  id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
  name: string;
  description: string;

  constructor() {
    // Initialize default values
    this.id='',
    this.name='',
    this.description=''
  }

}
