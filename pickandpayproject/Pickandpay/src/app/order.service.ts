import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  // ✅ Place order
  placeOrder(order: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/place`, order);
  }

  // ✅ Get orders by user ID
  getOrdersByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user/${userId}`);
  }

  // ✅ Cancel order by order ID
  cancelOrder(orderId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/cancel/${orderId}`, {});
  }
}
