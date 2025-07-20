import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar';
import { SidebarComponent } from './sidebar/sidebar';
import { MapComponent } from './map/map';
import { LandingComponent } from './landing/landing';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    MapComponent,
    LandingComponent
  ],
  exports: [LandingComponent]
})
export class SharedModule { }
