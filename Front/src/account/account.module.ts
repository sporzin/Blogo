import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { AccountSharedModule } from './shared/account.shared.module';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule, AccountSharedModule],
})
export class AccountModule {}
