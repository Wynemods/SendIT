import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { ProfileComponent } from './profile/profile';
import { TrackParcelComponent } from './track-parcel/track-parcel';
import { CenteredDashboardComponent } from './centered-dashboard/centered-dashboard';
import { MinimalDashboardComponent } from './minimal-dashboard/minimal-dashboard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'centered-dashboard', component: CenteredDashboardComponent },
  { path: 'minimal-dashboard', component: MinimalDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'track-parcel', component: TrackParcelComponent }
];

@NgModule({
  imports: [
    CommonModule,
    DashboardComponent,
    ProfileComponent,
    TrackParcelComponent,
    CenteredDashboardComponent,
    MinimalDashboardComponent,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
