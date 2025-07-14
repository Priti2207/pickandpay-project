import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService, Product, User } from '../admin.service';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css']
})
export class AdminDashboard {
  section: string = 'add';
  isEditing: boolean = false;

  product: Product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    image: '',
    category: ''
  };

  products: Product[] = [];
  users: User[] = [];

  productSearchTerm: string = '';
  userSearchTerm: string = '';

  constructor(private adminService: AdminService) {
    this.loadProducts();
    this.loadUsers();
  }

  showSection(sec: string) {
    this.section = sec;
  }

  loadProducts() {
    this.adminService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadUsers() {
    this.adminService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  addOrUpdateProduct() {
    if (this.isEditing && this.product.id !== undefined) {
      this.adminService.updateProduct(this.product.id, this.product).subscribe({
        next: () => {
          alert('Product updated successfully!');
          this.loadProducts();
          this.resetForm();
        },
        error: err => alert('Update failed: ' + (err.error?.message || JSON.stringify(err.error)))
      });
    } else {
      this.adminService.addProduct(this.product).subscribe({
        next: () => {
          alert('Product added successfully!');
          this.loadProducts();
          this.resetForm();
        },
        error: err => alert('Add failed: ' + (err.error?.message || JSON.stringify(err.error)))
      });
    }
  }

  editProduct(p: Product) {
    this.product = { ...p };
    this.isEditing = true;
    this.section = 'add';
  }

  deleteProduct(id: number | undefined) {
    if (!id) return;
    if (confirm('Are you sure to delete this product?')) {
      this.adminService.deleteProduct(id).subscribe(() => {
        alert('Product deleted');
        this.loadProducts();
      });
    }
  }

  deleteUser(id: number | undefined) {
    if (!id) return;
    if (confirm('Are you sure to delete this user?')) {
      this.adminService.deleteUser(id).subscribe(() => {
        alert('User deleted');
        this.loadUsers();
      });
    }
  }

  resetForm() {
    this.product = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      image: '',
      category: ''
    };
    this.isEditing = false;
  }

  filteredProducts(): Product[] {
    const term = this.productSearchTerm.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      (p.category && p.category.toLowerCase().includes(term))
    );
  }

 filteredUsers(): User[] {
  const term = this.userSearchTerm.toLowerCase();
  return this.users.filter(u =>
    u.name.toLowerCase().includes(term) ||
    u.email.toLowerCase().includes(term) ||
    (u.mobile && u.mobile.toLowerCase().includes(term))
  );
}

  }

