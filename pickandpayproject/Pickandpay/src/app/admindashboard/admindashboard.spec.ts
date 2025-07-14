import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css']
})
export class AdminDashboard {
  selectedSection: string = '';

  showSection(section: string) {
    this.selectedSection = section;
  }

  isSectionVisible(section: string): boolean {
    return this.selectedSection === section;
  }

  clearSection() {
    this.selectedSection = '';
  }
}
