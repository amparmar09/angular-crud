import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard, LoginGuard } from './guard/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './common/page-404/page-404.component';

export const routes: Routes = [
    { path: 'register', canActivate: [LoginGuard], component: RegisterComponent, title: 'Register' },
    { path: 'login', canActivate: [LoginGuard], component: LoginComponent, title: 'Login' },
    { path: '', canActivate: [authGuard], component: DashboardComponent, title: 'Dashboard' },
    { path: 'about', canActivate: [authGuard], component: AboutComponent, title: 'About-Us' },
    { path: 'contact', canActivate: [authGuard], component: ContactComponent, title: 'Contact' },
    { path: '**', component: Page404Component, title: 'Page not found' }
];
