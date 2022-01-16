import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicHeaderComponent } from './shared/public-header/public-header.component';
import { PublicFooterComponent } from './shared/public-footer/public-footer.component';


@NgModule({
  declarations: [
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
