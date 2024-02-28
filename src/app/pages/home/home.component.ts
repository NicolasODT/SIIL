// TypeScript Component File: HomepageComponent.ts
import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { NavbarComponent } from '../../core/navbar/navbar.component';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './home.component.html',
  imports : [NavbarComponent, SidebarComponent],
  styleUrls: ['./home.component.css']
})
export class HomepageComponent {
  isLoggedIn = signal(false);
  user = signal({ name: 'John Doe' }); // Simulate user object with name

  constructor(private authService: AuthService) {

    this.isLoggedIn.set(this.authService.checkLoggedIn());

    if (this.isLoggedIn()) {
      this.user.set({ name: 'John Doe' }); 
    }
  }
}
