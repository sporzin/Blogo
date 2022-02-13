import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    CreatePostModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
