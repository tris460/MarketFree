import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  url = 'Http://127.0.0.1:3000';

  async validatePayment(formData: any) {
    try {
      const response = await this.http.post(`${this.url}/payment`, formData).toPromise();
      return response;
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      console.error('Error response:', error); // Agrega esta línea para imprimir el contenido del objeto 'error'
      throw error;
    }
  }  
}