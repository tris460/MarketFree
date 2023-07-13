export interface UsersModel {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  image: string;
  purchasedProducts: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  shoppingCart: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
  productsForSale: string[]; //TODO: Validar el tipo, en la BD es un ObjectID
}
