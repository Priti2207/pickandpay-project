import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../user.service';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  user: User = { name: '', email: '', password: '', address: '', mobile: '' };
  hidePassword = true;

  constructor(private router: Router, private userService: UserService) {}

  submit() {
    if (!this.user.name || !this.user.email || !this.user.password || !this.user.address || !this.user.mobile) {
      alert('All fields are required');
      return;
    }

    this.userService.register(this.user).subscribe({
      next: res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        localStorage.setItem('userId', String(res.id)); // ✅ convert to string
        alert('Registered successfully!');
        this.router.navigate(['/profile']);
      },
      error: err => alert('Register failed: ' + err.error)
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
