import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService, Admin } from '../admin.service';

@Component({
  selector: 'admin-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminregister.html',
  styleUrls: ['./adminregister.css']
})
export class AdminRegister {
  admin: Admin = { email: '',name:'', password: '' };
  hidePassword = true;

  constructor(private router: Router, private adminService: AdminService) {}

  submit() {
    if (!this.admin.email || !this.admin.password) {
      alert('Email and password are required');
      return;
    }

    this.adminService.register(this.admin).subscribe({
      next: res => {
        localStorage.setItem('currentAdmin', JSON.stringify(res));
        alert('Admin registered successfully!');
        this.router.navigate(['/admindashboard']);
      },
      error: err => alert('Admin registration failed: ' + err.error)
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToLogin() {
    this.router.navigate(['/adminlogin']);
  }
}
