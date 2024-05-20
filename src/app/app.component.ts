import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, RouterOutlet, MatToolbarModule, DashboardComponent, RouterModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentUser: any
  menuOpen: boolean = false;
  sideNav: boolean = true;

  constructor(private router: Router) {
    this.currentUser = localStorage.getItem('userDetails')

  }

  sidenavOpened = false;

  onSidenavChange(isOpened: boolean) {
    this.sidenavOpened = isOpened;
  }

  sideNavToggle() {
    this.sideNav = !this.sideNav
  }


  logout() {
    this.router.navigateByUrl('/login')
    localStorage.clear();
    this.currentUser = null;

  }
}
