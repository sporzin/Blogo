import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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
