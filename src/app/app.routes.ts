import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard, LoginGuard } from './guard/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'register', canActivate: [LoginGuard], component: RegisterComponent },
    { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
    { path: '', canActivate: [authGuard], component: DashboardComponent },
    { path: 'about', canActivate: [authGuard], component: AboutComponent },
    { path: 'contact', canActivate: [authGuard], component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
