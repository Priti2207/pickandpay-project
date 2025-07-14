import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  submitted = false;
  hidePassword = true;

  constructor(private router: Router, private userService: UserService) {}

  submit() {
    this.submitted = true;

    if (!this.email || !this.password) {
      alert('Email and password are required');
      return;
    }

    this.userService.login(this.email, this.password).subscribe({
      next: user => {
        alert('Login successful');
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('userId', String(user.id)); // ✅ convert to string
        this.router.navigate(['/profile']);
      },
      error: () => {
        alert('Invalid credentials');
      }
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
