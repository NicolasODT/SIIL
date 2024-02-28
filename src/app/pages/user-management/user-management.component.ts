import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

interface User {
  id: number;
  username: string;
  email: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports : [FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users = signal<User[]>([
    // Mocked users
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com' }
  ]);

  editUser = signal<User | null>(null);
  currentUser: User | null = null;
  constructor() {
    // Définir un utilisateur par défaut lors de l'initialisation du composant
    this.currentUser = { id: 1, username: 'john_doe', email: 'john@example.com' };

  }

  setDefaultUser(): void {
    // Vous pouvez définir ici l'utilisateur par défaut que vous souhaitez tester
    const defaultUser: User = { id: 1, username: 'john_doe', email: 'john@example.com' };
    this.startEditUser(defaultUser);
  }

  startEditUser(user: User): void {
    this.editUser.set(user);
  }

  deleteUser(userId: number): void {
    this.users.update(users => users.filter(user => user.id !== userId));
  }

  saveUser(): void {
    const editedUser = this.editUser();
    if (editedUser) {
      this.users.update(users => users.map(u => u.id === editedUser.id ? editedUser : u));
      this.editUser.set(null);
    }
  }

  cancelEdit(): void {
    this.editUser.set(null);
  }
    // Méthode pour déconnecter l'utilisateur
    logout(): void {
      // Déconnectez l'utilisateur en réinitialisant currentUser à null
      this.currentUser = null;
    }
}
