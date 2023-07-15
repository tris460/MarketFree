import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { benefits } from '../models/benefits';

@Injectable({
  providedIn: 'root'
})
export class BenefitsServices {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  obtenerBenefits(){
      
    return this.http.get(`${this.url}/benefits`).toPromise();
  }

  /*registarCategoria( usuario: benefits) {
    return this.http.post(`${this.url}/categoria`, usuario).toPromise();
  }

 actualizarCategoria(id: string, usuario: benefits) {
  return this.http.put(`${this.url}/categoria/${id}`, usuario).toPromise();
 }

 eliminarCategoria(id: string) {
  return this.http.delete(`${this.url}/categoria/${id}`).toPromise();
 }*/

}
