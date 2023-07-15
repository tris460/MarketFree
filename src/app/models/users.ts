export class UsersModel implements UsersModel {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  image: string;
  purchasedProducts: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  shoppingCart: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  productsForSale: string[]; //TODO: Validar el tipo, en la BD es un ObjectID

constructor(){
  this.id= '';
  this.name = '';
  this.lastname = '';
  this.email = '';
  this.password = '';
  this.image = '';
  this.purchasedProducts = []; //TODO: Validar el tipo, en la BD es un ObjectID
  this.shoppingCart = []; //TODO: Validar el tipo, en la BD es un ObjectID
  this.productsForSale = []; //TODO: Validar el tipo, en la BD es un ObjectID

}
}