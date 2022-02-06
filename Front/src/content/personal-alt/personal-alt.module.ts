import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAltComponent } from './personal-alt.component';
import { PersonalAltRoutingModule } from './personal-alt.routing.module';

@NgModule({
  declarations: [PersonalAltComponent],
  imports: [CommonModule, PersonalAltRoutingModule],
})
export class PersonalAltModule {}
