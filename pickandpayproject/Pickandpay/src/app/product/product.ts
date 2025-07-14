// src/app/product/product.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product',
  standalone: true,
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class Product {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedProduct: any = null;
  id: number | null = null;
  searchTerm: string = '';
  category: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

 ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params['id'] ? +params['id'] : null;
  });

  this.route.queryParams.subscribe(params => {
    this.searchTerm = params['search'] || '';
    this.category = params['category'] || null;

    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: data => this.selectedProduct = data,
        error: () => console.error('Product load failed')
      });
    } else {
      this.selectedProduct = null;

      this.productService.getAllProducts().subscribe({
        next: data => {
          this.products = data;

          // ✅ Key part: only filter if term/category exists
          if (this.searchTerm || this.category) {
            this.filterProducts();
          } else {
            this.filteredProducts = [...this.products]; // clone full list
          }
        },
        error: () => console.error('Product list load failed')
      });
    }
  });
}


  // ✅ Combined search + category filter
  filterProducts() {
    const term = this.searchTerm.toLowerCase().trim();
    const category = this.category ? this.category.toLowerCase().trim() : '';

    this.filteredProducts = this.products.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(term);
      const descriptionMatch = p.description.toLowerCase().includes(term);
      const categoryMatch = p.category && p.category.toLowerCase().includes(term);
      const actualCategoryMatch = category ? p.category?.toLowerCase() === category : true;

      return (nameMatch || descriptionMatch || categoryMatch) && actualCategoryMatch;
    });
  }

  addToCart(product: any) {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!user.id) {
      alert('You must be logged in to add to cart');
      this.router.navigate(['/login']);
      return;
    }

    const cartItem = {
      userId: user.id,
      productId: product.id,
      quantity: 1,
      image: product.image
    };

    this.cartService.addToCart(cartItem).subscribe({
      next: () => alert(`🛒 "${product.name}" added to cart`),
      error: () => alert('Failed to add to cart')
    });
  }

  addToWishlist(product: any) {
    const userId = Number(localStorage.getItem('userId'));
    if (!userId) {
      alert('You must be logged in to add to wishlist');
      this.router.navigate(['/login']);
      return;
    }

    const item = {
      userId: userId,
      productId: product.id,
      image: product.image
    };

    this.wishlistService.addToWishlist(item).subscribe({
      next: () => alert(`❤️ "${product.name}" added to wishlist`),
      error: () => alert('Failed to add to wishlist')
    });
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  backToList() {
    this.router.navigate(['/products']);
  }
}
