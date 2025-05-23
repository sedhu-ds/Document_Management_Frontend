import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://<ec2-public-ip>:8000';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/`, user);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/token`, { username, password });
  }

  isAdmin(): boolean {
    // Placeholder: Decode JWT token to check role
    const token = localStorage.getItem('token');
    if (token) {
      // Implement JWT decoding logic here
      return false; // Replace with actual role check
    }
    return false;
  }
}