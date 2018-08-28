
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutModuleRoutes } from './layout.routing';
import { HomeComponent } from './../home/home.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutModuleRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})

export class LayoutModule {}
