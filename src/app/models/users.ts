export class UsersModel implements UsersModel {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  address: string;
  password: string;
  image: string;
  purchasedProducts: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  shoppingCart: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  productsForSale: string[]; //TODO: Validar el tipo, en la BD es un ObjectID

  constructor() {
    // Initialize default values
    this._id= '';
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.address = '';
    this.password = '';
    this.image = 'https://www.pngmart.com/es/image/326841';
    this.purchasedProducts = []; //TODO: Validar el tipo, en la BD es un ObjectID
    this.shoppingCart = []; //TODO: Validar el tipo, en la BD es un ObjectID
    this.productsForSale = []; //TODO: Validar el tipo, en la BD es un ObjectID
  }
}
