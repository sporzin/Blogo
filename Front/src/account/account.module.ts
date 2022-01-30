import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { AccountSharedModule } from './shared/account.shared.module';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import { LandingModule } from 'src/landing/landing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AccountComponent, LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AccountSharedModule,
    LandingModule,
  ],
})
export class AccountModule {}
