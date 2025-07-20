import { Routes } from '@angular/router';
import { LandingComponent } from './shared/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user-module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
