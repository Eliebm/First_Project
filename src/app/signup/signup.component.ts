import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
    this.emailvalue="email@example/com";
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

