import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService, Admin } from '../admin.service';

@Component({
  selector: 'admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminlogin.html',
  styleUrls: ['./adminlogin.css']
})
export class AdminLogin {
  admin: Admin = { email: '', password: '' };
  hidePassword = true;

  constructor(private router: Router, private adminService: AdminService) {}

  submit() {
    if (!this.admin.email || !this.admin.password) {
      alert('Please enter email and password.');
      return;
    }

    this.adminService.login(this.admin).subscribe({
      next: res => {
        localStorage.setItem('currentAdmin', JSON.stringify(res));
        this.router.navigate(['/admindashboard']);
      },
      error: err => alert('Login failed: ' + err.error)
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToRegister() {
    this.router.navigate(['/adminregister']);
  }
}
