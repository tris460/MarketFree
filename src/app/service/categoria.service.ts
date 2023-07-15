import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  obtenerCategorias(){
    return this.http.get(`${this.url}/category`).toPromise();
  }

}
