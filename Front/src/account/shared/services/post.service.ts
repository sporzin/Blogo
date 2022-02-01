import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpPost: HttpClient) {}

  postMethod(url: string, body: any, option?: any) {
    let resultValue: any;

    this.httpPost.post(url, body).subscribe((result) => (resultValue = result));
  }
}
