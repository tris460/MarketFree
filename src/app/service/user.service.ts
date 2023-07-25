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

  getUserById(id: string) {
    return this.http.get(`${this.url}/users`).toPromise()
      .then((users: any) => {
        const user = users.data.filter((u:any) => u._id === id)[0];
        return user;
      });
  }

  async loginUser(email: string, password: string): Promise<string> { // Actualizamos el tipo de retorno a 'string'
    try {
      const loginData = { email, password };
      const response = await this.http.post<any>(`${this.url}/login`, loginData).toPromise();
      return response.accessToken; // Obtenemos el token de acceso desde la respuesta
    } catch (error) {
      // Si hay un error en la API, se captura aquí y se lanza una excepción para manejarlo en el componente
      throw error;
    }
  }

  updateUser(id: string, updatedUser: UsersModel) {
    return this.http.put(`${this.url}/users/${id}`, updatedUser).toPromise();
  }
}
