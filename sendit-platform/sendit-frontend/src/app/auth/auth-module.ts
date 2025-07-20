import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Signup } from './signup/signup';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: Signup }
];

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    Signup,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
