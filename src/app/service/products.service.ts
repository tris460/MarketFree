import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  getProducts() {
    return this.http.get(`${this.url}/products`).toPromise();
  }

  addProduct(product: Product) {
    return this.http.post(`${this.url}/products`, product).toPromise();
  }

  getProductById(id: string) {
    return this.http.get(`${this.url}/products`).toPromise()
      .then((products: any) => {
        const product = products.data.filter((p:any) => p._id === id)[0];
        return product;
      });
  }

 /*actualizarProducto(id: string, usuario: Product) {
  return this.http.put(`${this.url}/producto/${id}`, usuario).toPromise();
 }

 eliminarProducto(id: string) {
  return this.http.delete(`${this.url}/producto/${id}`).toPromise();
 }*/

}
