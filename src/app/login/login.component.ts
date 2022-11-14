import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private _localUrl = environment.baseUrl;
  storage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  loginForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    type: new FormControl('', [Validators.required])

  });

  get nameValid() {

    return this.loginForm.get('name');
  }
  get passwordValid() {

    return this.loginForm.get('password');
  }
  get typeValid() {

    return this.loginForm.get('type');


  }

  constructor(private accountserv: AccountService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

  }
  ngOnDestroy() {

  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.openSnackBar("There Are Items That require your attention !");

    }
    else {

      if (this.accountserv.getAccount(this.nameValid?.value, this.passwordValid?.value, this.typeValid?.value) === true) {
        this.storage = this.loginForm.get('type')?.value;

        sessionStorage.setItem('accountType', this.storage);

        location.href = this._localUrl + "home";
      } else {
        this.openSnackBar("You have Entered an Invalid Name Or Password. Please Try Again.");


      }
    }



  }

  clearErrorMessage(): void {
    this._snackBar.dismiss();
  }
  openSnackBar(msg: string): void {
    this._snackBar.open(msg, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}



