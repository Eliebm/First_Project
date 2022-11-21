import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormControl } from '@angular/forms';



@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  emailValue: string = "Email Address";



  firstFormGroup = new FormGroup({
    accountType: new FormControl(null, [Validators.required])
  });

  secondFormGroup = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl(null, [Validators.required])
  });

  thirdFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.nullValidator]),
    password: new FormControl(null, [Validators.required])

  });

  constructor() { }

  ngOnInit(): void {

  }
  get typeValid() {
    return this.firstFormGroup.get('accountType');
  }

  get fnameValid() {

    return this.secondFormGroup.get('fname');
  }
  get lnameValid() {

    return this.secondFormGroup.get('lname');
  }
  get emailValid() {

    return this.thirdFormGroup.get('email');


  }
  get passwordValid() {
    return this.thirdFormGroup.get('password');
  }





  submit(): void {

  }

}

