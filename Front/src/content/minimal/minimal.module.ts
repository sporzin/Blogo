import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinimalRoutingModule } from './minimal-routing.module';
import { MinimalComponent } from './minimal.component';


@NgModule({
  declarations: [
    MinimalComponent
  ],
  imports: [
    CommonModule,
    MinimalRoutingModule
  ]
})
export class MinimalModule { }
