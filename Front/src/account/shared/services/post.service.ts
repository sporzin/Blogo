import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountSharedModule } from '../account.shared.module';

@Injectable({
  providedIn: AccountSharedModule,
})
export class PostService {
  constructor(private httpPost: HttpClient) {}

  postMethod(url: string, body: any, option?: any) {
    let resultValue: any;

    this.httpPost.post(url, body).subscribe((result) => (resultValue = result));
  }
}
