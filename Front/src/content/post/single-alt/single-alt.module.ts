import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleAltRoutingModule } from './single-alt-routing.module';
import { SingleAltComponent } from './single-alt.component';


@NgModule({
  declarations: [
    SingleAltComponent
  ],
  imports: [
    CommonModule,
    SingleAltRoutingModule
  ]
})
export class SingleAltModule { }
