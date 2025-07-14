import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  address: string;
  mobile?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // ✅ Register new user
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/register`, user);
  }

  // ✅ Login existing user
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/login`, { email, password });
  }

  // ✅ Get user by ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  // ✅ Update user by ID
  updateUser(user: User): Observable<User> {
    if (!user.id) throw new Error("User ID is required to update.");
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  // ✅ Get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  // ✅ Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
