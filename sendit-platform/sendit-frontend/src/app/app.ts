import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { Router, NavigationEnd } from '@angular/router';
import { inject, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('sendit-frontend');
  private router = inject(Router);
  showDashboardLayout = false;
  isLandingPage = false;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const url = this.router.url;
      this.showDashboardLayout = (
        (url.startsWith('/user') && url !== '/user/profile') ||
        url.startsWith('/admin') ||
        url.startsWith('/dashboard')
      );
      this.isLandingPage = (
        url === '/' ||
        url.startsWith('/auth/login') ||
        url.startsWith('/auth/signup') ||
        url.startsWith('/user/track-parcel') ||
        url.startsWith('/user/dashboard') ||
        url.startsWith('/user/profile') ||
        url.startsWith('/admin/dashboard')
      );
    });
    // Set initial value
    const url = this.router.url;
    this.showDashboardLayout = (
      (url.startsWith('/user') && url !== '/user/profile') ||
      url.startsWith('/admin') ||
      url.startsWith('/dashboard')
    );
    this.isLandingPage = (
      url === '/' ||
      url.startsWith('/auth/login') ||
      url.startsWith('/auth/signup') ||
      url.startsWith('/user/track-parcel') ||
      url.startsWith('/user/dashboard') ||
      url.startsWith('/user/profile') ||
      url.startsWith('/admin/dashboard')
    );
  }
}
