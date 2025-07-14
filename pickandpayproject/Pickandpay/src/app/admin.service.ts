import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Admin {
  id?: number;
  name?: string;
  email: string;
  password: string;
  
   
}

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
   category: string;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  address?: string;
  mobile?: string;
}

export interface WishlistItem {
  id?: number;
  userId: number;
  productId: number;
  image: string;
  
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  register(admin: Admin): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, admin);
  }

  login(admin: Admin): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, admin);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${id}`, product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  // ✅ Wishlist APIs

  addToWishlist(item: WishlistItem): Observable<any> {
    return this.http.post(`${this.baseUrl}/wishlist`, item);
  }

  getWishlist(userId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/wishlist/user/${userId}`);
  }

  deleteFromWishlist(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/wishlist/${productId}`);
  }
}
