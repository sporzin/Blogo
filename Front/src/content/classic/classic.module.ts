import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicRoutingModule } from './classic-routing.module';
import { ClassicComponent } from './classic.component';


@NgModule({
  declarations: [
    ClassicComponent
  ],
  imports: [
    CommonModule,
    ClassicRoutingModule
  ]
})
export class ClassicModule { }
