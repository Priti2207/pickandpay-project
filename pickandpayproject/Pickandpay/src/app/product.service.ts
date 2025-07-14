// src/app/product-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  private adminUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  // ✅ Get all products
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // ✅ Get product by ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // ✅ Get products by category
  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.adminUrl}/category/${category}`);
  }
}
