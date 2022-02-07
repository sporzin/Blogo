import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/account/shared/services/auth.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.is_authenticated().subscribe((result) => {
      this.isLoggedIn = result;
    });
  }

  ngOnInit(): void {}

  logOut() {
    this.authService.logout();
    this.isLoggedIn = false;
    window.location.reload();
  }
}
