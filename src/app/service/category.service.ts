import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  getCategories(){
    return this.http.get(`${this.url}/category`).toPromise();
  }

}
