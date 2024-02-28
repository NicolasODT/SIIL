// AuthService File: auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(username: string, password: string): boolean {
    // Simulated login logic
    console.log(username, password);
    return true; // Assume login is always successful for simulation
  }

  checkLoggedIn(): boolean {
    // Simulate checking for a logged-in user
    return !!localStorage.getItem('userToken');
  }
}
