import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import { LandingModule } from 'src/landing/landing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule, LandingModule, SharedModule],
})
export class AccountModule {}
