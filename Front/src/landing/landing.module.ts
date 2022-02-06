import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicHeaderComponent } from './shared/public-header/public-header.component';
import { PublicFooterComponent } from './shared/public-footer/public-footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
  exports: [PublicHeaderComponent, PublicFooterComponent],
})
export class LandingModule {}
