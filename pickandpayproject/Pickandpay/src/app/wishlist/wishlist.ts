import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css']
})
export class Wishlist {
  wishlistItems: any[] = [];
  userId: number = Number(localStorage.getItem('userId'));

  constructor(private wishlistService: WishlistService, private productService: ProductService) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    if (!this.userId) return;

    this.wishlistService.getWishlistByUser(this.userId).subscribe({
      next: wishlist => {
        const requests = wishlist.map(item =>
          this.productService.getProductById(item.productId).toPromise()
        );

        Promise.all(requests).then(products => {
          this.wishlistItems = wishlist.map((item, i) => ({
            ...item,
            product: products[i]
          }));
        });
      }
    });
  }

  removeItem(itemId: number): void {
    this.wishlistService.removeFromWishlist(itemId).subscribe(() => this.loadWishlist());
  }
}
