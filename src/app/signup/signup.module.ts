import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { WarningSvgIconComponent } from './warning-svg-icon/warning-svg-icon.component';


@NgModule({
  declarations: [
    SignupComponent,
    WarningSvgIconComponent,
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class SignupModule { }
