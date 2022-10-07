import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public emailmsg : string="Email Address";
    

    
   loginform= new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),

   });

  constructor() { }

  ngOnInit(): void {
   
  }
  get fnamevalid(){
    
    return this.loginform.get('fname');
  }
  get lnamevalid(){
    
    return this.loginform.get('lname');
  }
  get emailvalid(){
    
    return this.loginform.get('email');
  }
  

 

  submit():void{
   if(this.loginform.valid){
    console.log("form submitted !");
   }
    else{
      this.emailmsg="example@example.com";
    }

   
  }
}
