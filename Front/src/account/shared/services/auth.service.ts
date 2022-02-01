import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppMainConst } from 'src/shared/consts/AppConst';

interface userCred {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUrl: string = AppMainConst.appServerUrl;
  constructor(private httpClient: HttpClient) {}

  processLogin(userCred: userCred) {
    return this.httpClient.post(this._authUrl + 'users/', userCred);
  }

  private getUser() {}
}
