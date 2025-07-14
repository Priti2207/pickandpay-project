
// src/app/profile/profile.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../user.service';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  user: User | null = null;
  hidePassword = true;

  constructor(private router: Router, private userService: UserService) {
    const stored = localStorage.getItem('currentUser');
    this.user = stored ? JSON.parse(stored) : null;
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
update() {
  if (!this.user?.id) {
    alert('User ID is missing');
    return;
  }

  if (!this.user?.name || !this.user?.email || !this.user?.password || !this.user?.address) {
    alert('All fields are required');
    return;
  }

  this.userService.updateUser(this.user).subscribe({
    next: (updatedUser) => {
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.user = updatedUser;
      alert('Profile updated successfully!');
    },
    error: (err) => {
      console.error(err);
      alert('Failed to update profile.');
    }
  });
}



  logout() {
    localStorage.removeItem('currentUser');
    this.user = null;
    this.router.navigate(['/login']);
  }
}
