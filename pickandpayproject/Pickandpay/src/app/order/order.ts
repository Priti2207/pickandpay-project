import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrls: ['./order.css']
})
export class Order {
  orders: any[] = [];
  userId = Number(localStorage.getItem('userId'));

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrdersByUser(this.userId).subscribe({
      next: (res: any[]) => this.orders = res,
      error: err => console.error('Error fetching orders:', err)
    });
  }

  cancelOrder(orderId: number): void {
    this.orderService.cancelOrder(orderId).subscribe({
      next: () => {
        alert("❌ Order cancelled successfully.");
        this.fetchOrders(); // Reload updated data
      },
      error: err => {
        alert("❌ Failed to cancel order.");
        console.error('Cancel error:', err);
      }
    });
  }
}
