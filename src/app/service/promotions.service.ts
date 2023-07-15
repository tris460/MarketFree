import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promotions } from '../models/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionServices {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  obtenerPromotions(){
    return this.http.get(`${this.url}/promotions`).toPromise();
  }

}
