import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountSharedModule } from '../account.shared.module';

@Injectable({
  providedIn: AccountSharedModule,
})
export class GetService {
  constructor(private httpGet: HttpClient) {}

  public getMethod(url: string, options?: any) {
    let resultValue: any;
    this.httpGet.get(url).subscribe((result) => {
      resultValue = result;
    });
  }
}
