export class Refunds implements Refunds {
    _id: string;  //TODO: Validar el tipo, en la BD es un ObjectID
    motive: string;
    type: string;
  
    constructor() {
      // Initialize default values
      this._id = '',
      this.motive='',
      this.type=''
    }
  
  }
  