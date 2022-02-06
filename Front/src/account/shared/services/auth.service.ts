import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppMainConst } from 'src/shared/consts/AppConst';
import {catchError, map, Observable, of, shareReplay} from "rxjs";
import { tap } from "rxjs/operators";
import {IUser} from "../../../shared/models/user.model";

interface IToken{
  access_token : string,
  token_type?: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUrl: string = AppMainConst.appServerUrl;
  constructor(private http: HttpClient) {}


  is_authenticated(): boolean |Observable<boolean> {
    if (!this.token_exist()){
      return false;
    }

    return this.token_valid().pipe(
      map((res) => {
        return !res;
      })
    )

  }

  login(username: string, password: string) {
    return this.http.post<IToken>(`${this._authUrl}auth/token/`, {
      username: username,
      password: password
    })
      .pipe(shareReplay())
      .pipe(tap(res => this._set_session(res)))
      .pipe(catchError(err => of(false)));
  }

  _set_session(token: IToken) {
    localStorage.setItem('token', token.access_token);
    localStorage.setItem('token_type', token.token_type);
  }

  _get_session() : IToken{
    return {
      access_token: localStorage.getItem("token"),
      token_type: localStorage.getItem("token_type")
    }
  }

  token_exist(): boolean{
      let token: IToken = this._get_session();
      return !!(token.token_type && token.access_token);
  }

  token_valid(){
    let token: IToken = this._get_session()
    return this.http.get<IUser>(`${this._authUrl}auth/me/`, {
      headers: {
        'Authorization': "Bearer " + `${token.access_token}`
      }
    })
      .pipe(shareReplay())
      .pipe(catchError(err => of(false)))
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('token_type');
  }
}
