import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(private http: HttpClient) { }
  url = `Http://127.0.0.1:3000`;

  getFaqs(){
    return this.http.get(`${this.url}/faqs`).toPromise();
  }

}
