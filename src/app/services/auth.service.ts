import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setLoggedInUserName(userName: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://backend-organizado-libros.onrender.com/api'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const data = { email, password };
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
  }

  register(username: string, email: string, password: string) {
    const data = { username, email, password };
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data);
  }
}
