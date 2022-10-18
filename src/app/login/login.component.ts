import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup, NgModel, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pm-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  haserrorMsg:boolean=true;
  errorMsg:string="";
  storage:any;
  
  loginForm= new FormGroup({
    name:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required])

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
    if(this.loginForm.invalid){
      this.haserrorMsg=false;
      this.errorMsg="there are items that require your attention !";
    }
    else{
      
      if(this.accountserv.getAccount(this.nameValid?.value,this.passwordValid?.value,this.typeValid?.value)===true){
        this.storage=this.loginForm.get('type')?.value;
        
        sessionStorage.setItem('accountType',this.storage);
        
       location.href="/Signup";
      }else{
       this.haserrorMsg=false;
       this.errorMsg="You have Entered an Invalid Name Or Password. Please Try Again.";
       
      }
    }
   
    
 
  }
 
  clearErrorMessage():void{
    this.haserrorMsg=true;
  }

}
 


