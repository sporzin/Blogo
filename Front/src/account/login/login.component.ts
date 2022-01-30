import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  username: FormControl;
  password: FormControl;
  constructor() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.username = <FormControl>this.formGroup.get('username');
    this.password = <FormControl>this.formGroup.get('password');
  }

  ngOnInit(): void {}

  login() {}
}
