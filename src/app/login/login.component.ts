import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


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
    password: new FormControl(null, [Validators.required])

  });

  get nameValid() {

    return this.loginForm.get('name');
  }
  get passwordValid() {

    return this.loginForm.get('password');
  }


  constructor(private accountserv: AccountService, private _snackBar: MatSnackBar, private _authentService: AuthenticationService, private _router: Router) {

  }

  ngOnInit(): void {

  }
  ngOnDestroy() {

  }

  submit(): void {
    const val = this.loginForm.value;

    if (this.loginForm.invalid) {
      this.openSnackBar("There Are Items That require your attention !");

    }
    else {

      this._authentService.login(val).subscribe(data => {
        console.log("Is Login Success: " + data);

        if (data) { this._router.navigate(['/home']); }
        else {
          this.openSnackBar("You have Entered an Invalid Name Or Password. Please Try Again.");


        }
      });

      /*  if (this.accountserv.getAccount(this.nameValid?.value, this.passwordValid?.value, this.typeValid?.value) === true) {
          this.storage = this.loginForm.get('type')?.value;
          this._authentService.setWebStorageData('accountType', this.storage);
  
  
          location.href = "/home";
        } */
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



