import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomepageComponent } from './pages/home/home.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    { path: 'Profile', component: ProfileComponent , data: { title: 'Profile' } },
    { path: 'homepage', component: HomepageComponent , data: { title: 'Accueil' } },
    { path: 'UserManagement', component: UserManagementComponent , data: { title: 'user' } },
    
];
