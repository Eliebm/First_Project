import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormControl } from '@angular/forms';



@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  emailvalue:string="Email Address";
     
     
     
    signupform= new FormGroup({
    fname:new FormControl(null,[Validators.required]),
    lname:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email,Validators.nullValidator]),
    password:new FormControl(null,[Validators.required])

   });

  constructor() { }

  ngOnInit(): void {
   
  }
  get fnamevalid(){
    
    return this.signupform.get('fname');
  }
  get lnamevalid(){
    
    return this.signupform.get('lname');
  }
  get emailvalid(){
     this.emailvalue="email@example/com";
    return this.signupform.get('email');
    
    
  }
  get passwordvalid(){
    return this.signupform.get('password');
  }
   
    
  

  submit():void{
   if(this.signupform.valid){
    console.log(this.signupform.value);
    console.log("form submitted !");
    
   }
    else{
      this.validateAllFields(this.signupform);
      
     
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

