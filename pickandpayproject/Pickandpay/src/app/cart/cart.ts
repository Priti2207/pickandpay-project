import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  cartItems: any[] = [];
  userId: number = Number(localStorage.getItem('userId'));

  showAddressConfirmation: boolean = false;
  showPaymentConfirmation: boolean = false;
  currentUser: any = null;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.loadCart();
  }

  loadCart(): void {
    if (!this.userId) return;

    this.cartService.getCartByUser(this.userId).subscribe({
      next: cart => {
        const requests = cart.map(item =>
          this.productService.getProductById(item.productId).toPromise()
        );

        Promise.all(requests).then(products => {
          this.cartItems = cart.map((item, i) => ({
            ...item,
            product: products[i]
          }));
        });
      }
    });
  }

  updateQuantity(item: any, change: number): void {
    const newQty = item.quantity + change;
    if (newQty < 1) return;

    const updated = { ...item, quantity: newQty };
    this.cartService.updateCart(updated).subscribe(() => this.loadCart());
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId).subscribe(() => this.loadCart());
  }

  // Step 1: Show Address Confirmation Popup
  confirmAddress() {
    this.showAddressConfirmation = false;
    this.showPaymentConfirmation = true;
  }

  // Step 2: Place All Orders (Optional)
  finalPlaceOrder() {
    const user = this.currentUser;
    if (!user || !user.id || !user.name || !user.email) {
      alert('User information missing');
      return;
    }

    const orderRequests = this.cartItems.map(item => {
      const orderData = {
        userId: user.id,
        userName: user.name,
        email: user.email,
        mobile: user.mobile || '',
        userAddress: user.address || '',
        productId: item.product.id,
        productName: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        image: item.product.image
      };
      return this.orderService.placeOrder(orderData).toPromise();
    });

    Promise.all(orderRequests)
      .then(() => {
        alert('✅ Orders placed!');
        this.cartItems = [];
        this.showPaymentConfirmation = false;
      })
      .catch(err => {
        console.error(err);
        alert('❌ Order placement failed.');
      });
  }

  // ✅ THIS METHOD SHOULD BE OUTSIDE finalPlaceOrder
  placeSingleOrder(item: any) {
    const user = this.currentUser;
    if (!user || !user.id) {
      alert("Please login first!");
      return;
    }

    const orderData = {
      userId: user.id,
      userName: user.name,
      email: user.email,
      mobile: user.mobile || '',
      userAddress: user.address || '',
      productId: item.product.id,
      productName: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
      image: item.product.image
    };

    this.orderService.placeOrder(orderData).subscribe({
      next: () => {
        alert("✅ Order placed!");
        this.removeItem(item.id);
      },
      error: err => {
        console.error(err);
        alert("❌ Order failed.");
      }
    });
  }
}
