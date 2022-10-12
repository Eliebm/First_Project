import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormControl } from '@angular/forms';



@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    emailValue:string="Email Address";
     
     
     
    signupForm= new FormGroup({
    fname:new FormControl(null,[Validators.required]),
    lname:new FormControl(null,[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.nullValidator]),
    password:new FormControl(null,[Validators.required])

   });

  constructor() { }

  ngOnInit(): void {
   
  }
  get fnameValid(){
    
    return this.signupForm.get('fname');
  }
  get lnameValid(){
    
    return this.signupForm.get('lname');
  }
  get emailValid(){
    
    return this.signupForm.get('email');
    
    
  }
  get passwordValid(){
    return this.signupForm.get('password');
  }
   
  changeEmailValue(emailVal:string){
    
      if(this.signupForm.get('email')?.value===""){
           this.emailValue=emailVal;
    
    }
  
  }
  

  submit():void{
   if(this.signupForm.valid){
    console.log(this.signupForm.value);
    console.log("form submitted !");
    
   }
    else{
      this.validateAllFields(this.signupForm);
      
     
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

