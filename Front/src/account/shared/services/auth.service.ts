import { Injectable } from '@angular/core';
import { AccountSharedModule } from '../account.shared.module';

@Injectable({
  providedIn: AccountSharedModule,
})
export class AuthService {
  constructor() {}
}
