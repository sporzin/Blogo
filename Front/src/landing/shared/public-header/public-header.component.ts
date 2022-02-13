import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/account/shared/services/auth.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent implements OnInit {
  private _isLoggedIn: boolean = false;

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  constructor(private authService: AuthService) {
    this.authService.is_authenticated().subscribe((result) => {
      this._isLoggedIn = result;
    });
  }

  ngOnInit(): void {}

  logOut() {
    this.isLoggedIn = false;
    this.authService.logout();
    window.location.reload();
  }
}
