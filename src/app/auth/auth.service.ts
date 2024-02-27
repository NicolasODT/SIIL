import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Ici, vous ajouterez la logique pour vérifier les identifiants
    console.log(username, password);
    return true; // Simule une authentification réussie
  }
}
