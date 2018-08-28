

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
const routes: Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component:HomeComponent}
];
@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule
    ],
  })
  export class AppRoutingModule { }
  export const routingComponents=[HomeComponent]