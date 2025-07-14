
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private baseUrl = 'http://localhost:8080/api/wishlist';

  constructor(private http: HttpClient) {}

  getWishlistByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user/${userId}`);
  }

  addToWishlist(item: any): Observable<any> {
    return this.http.post(this.baseUrl, item);
  }

  removeFromWishlist(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${itemId}`);
  }
}
