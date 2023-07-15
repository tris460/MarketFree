import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tags } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  obtenerTags(){
    return this.http.get(`${this.url}/tags`).toPromise();
  }

  /*registarCategoria( usuario: tags) {
    return this.http.post(`${this.url}/categoria`, usuario).toPromise();
  }

 actualizarCategoria(id: string, usuario: tags) {
  return this.http.put(`${this.url}/categoria/${id}`, usuario).toPromise();
 }

 eliminarCategoria(id: string) {
  return this.http.delete(`${this.url}/categoria/${id}`).toPromise();
 }*/

}
