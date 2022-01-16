import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RootRoutingModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    SharedModule,
  ],
  bootstrap: [RootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RootModule {}
