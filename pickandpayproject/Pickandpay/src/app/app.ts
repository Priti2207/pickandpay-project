// src/app/app.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // ✅ Router imported
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  searchTerm = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/products'], {
      queryParams: { search: this.searchTerm }
    });
  }
}

export default AppComponent; // ✅ for use in main.ts
