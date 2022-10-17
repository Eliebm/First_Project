import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'pm-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkName:string=" ";
  
  loginForm= new FormGroup({
    name:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
    type:new FormControl(null)

   });
   get nameValid(){
    
    return this.loginForm.get('name');
  }
  get passwordValid(){
    
    return this.loginForm.get('password');
  }
  get typeValid(){
    
    return this.loginForm.get('type');
    
    
  }
  constructor( private accountserv:AccountService) {
    
   }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    
  }
  
  submit():void{
   console.log(this.accountserv.getAccount(this.nameValid?.value,this.passwordValid?.value,this.typeValid?.value));
   if(this.accountserv.getAccount(this.nameValid?.value,this.passwordValid?.value,this.typeValid?.value)===true){
    location.href="/Signup";
   }
    
 
  }
 

}
 


