import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';

@Injectable({
  providedIn: SharedModule,
})
export class PostService {
  constructor(private httpPost: HttpClient) {}

  postMethod(url: string, body: any, option?: any) {
    let resultValue: any;

    this.httpPost.post(url, body).subscribe((result) => (resultValue = result));
  }
}
