import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  obtenerProductos() {
    console.log("Hola");
    return this.http.get(`${this.url}/products`).toPromise();
  }
  

 /* registarProducto( usuario: Product) {
    return this.http.post(`${this.url}/producto`, usuario).toPromise();
  }

 actualizarProducto(id: string, usuario: Product) {
  return this.http.put(`${this.url}/producto/${id}`, usuario).toPromise();
 }

 eliminarProducto(id: string) {
  return this.http.delete(`${this.url}/producto/${id}`).toPromise();
 }*/

}
