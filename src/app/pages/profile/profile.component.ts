import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports : [NavbarComponent, SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editMode = false;
  profileForm = new FormGroup({
    fullName: new FormControl('John Doe'),
    // ... other form controls ...
  });

  constructor() { }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSave(): void {
    if (this.profileForm.valid) {
      // Logic to save the profile information
      console.log('Profile saved:', this.profileForm.value);
    }
  }
}
