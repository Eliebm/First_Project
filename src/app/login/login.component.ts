import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public first_name : string='';

   loginform= new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl(''),

   });

  constructor() { }

  ngOnInit(): void {
   
  }

  get fnamevalid(){

    return this.loginform.get('fname');
  }

 

  submit():void{
   console.log(this.first_name);
  }
}
