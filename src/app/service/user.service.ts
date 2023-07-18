import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = `Http://127.0.0.1:3000`;

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(`${this.url}/users`).toPromise();
  }

  registerUser(user: UsersModel) {
    return this.http.post(`${this.url}/users`, user).toPromise();
  }

  /*actualizarUsuario(id: string, usuario: UsersModel) {
    return this.http.put(`${this.url}/usuario/${id}`, usuario).toPromise();
  }

  eliminarUsuario(id: string) {
    return this.http.delete(`${this.url}/usuario/${id}`).toPromise();
  }*/
}
