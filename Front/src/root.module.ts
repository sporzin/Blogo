import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RootRoutingModule,
    FontAwesomeModule,
    NgxSpinnerModule,
  ],
  bootstrap: [RootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RootModule {}
