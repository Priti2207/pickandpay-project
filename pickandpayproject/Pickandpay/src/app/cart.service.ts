import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}

  getCartByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user/${userId}`);
  }

  addToCart(item: any): Observable<any> {
    return this.http.post(this.baseUrl, item); // Backend handles quantity logic
  }

  removeFromCart(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${itemId}`);
  }

  updateCart(item: any): Observable<any> {
    return this.http.put(this.baseUrl, item);
  }
}



