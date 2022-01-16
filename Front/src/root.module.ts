import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, CommonModule, RootRoutingModule],
  bootstrap: [RootComponent],
})
export class RootModule {}
