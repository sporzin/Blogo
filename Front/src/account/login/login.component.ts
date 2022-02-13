import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
  form : FormGroup;


  constructor(private fb:FormBuilder,private authService: AuthService, private router: Router) {
    this.form =  this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  log_me_in(username: string, password: string)  {
    this.authService.login(username, password).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['/']).then(r => r);
        }else {
          alert('Login failed');
        }
      });
  }


  login() {
    const val = this.form.value;

    // check for form validation
    if (!val.username || !val.password) {
      alert('Please enter your username and password');
      return;
    }
    // check for token existence
    if (!this.authService.token_exist()) {
      this.log_me_in(val.username, val.password);
      return;
    }
    // subscribe to token_validator and check if token is valid
    this.authService.token_valid().subscribe(
      (res) => {
        if (res) {
          return this.router.navigate(['/']).then(r => r)
        }
        this.log_me_in(val.username, val.password);
        return this.router.navigate(['/']).then(r => r)
      });
  }




}

