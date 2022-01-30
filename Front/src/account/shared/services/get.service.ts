import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';

@Injectable({
  providedIn: SharedModule,
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
