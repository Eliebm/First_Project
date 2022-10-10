import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailvalue:string="";
     
     
     
    loginform= new FormGroup({
    fname:new FormControl(null,[Validators.required]),
    lname:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required])

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
  get passwordvalid(){
    return this.loginform.get('password');
  }

 

  submit():void{
   if(this.loginform.valid){
    console.log(this.loginform.value);
    console.log("form submitted !");
    
   }
    else{
      this.validateAllFields(this.loginform);
      this.emailvalue="email@example/com";
     
      }
      
      
    }
    validateAllFields(formGroup: FormGroup) {         
      Object.keys(formGroup.controls).forEach(field => {  
          const control = formGroup.get(field);            
          if (control instanceof FormControl) {             
              control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {        
              this.validateAllFields(control);  
          }
      });
  }
   
  }

