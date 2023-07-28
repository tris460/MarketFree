import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:3000'; // Replace this URL with your server's API URL

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`).toPromise();
  }

  registerUser(user: UsersModel) {
    return this.http.post(`${this.apiUrl}/users`, user).toPromise();
  }

  async loginUser(email: string, password: string): Promise<any> {
    try {
      const loginData = { email, password };
      const response = await this.http.post<any>(`${this.apiUrl}/users/login`, loginData).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  updateUser(id: string, updatedUser: UsersModel) {
    return this.http.put(`${this.apiUrl}/users/${id}`, updatedUser).toPromise();
  }

  getUserById(id: string) {
    return this.http.get(`${this.apiUrl}/users`).toPromise()
      .then((users: any) => {
        const user = users.data.filter((u:any) => u._id === id)[0];
        return user;
      });
  }
}
