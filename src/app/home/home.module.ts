import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    MatButtonModule


  ]
})
export class HomeModule { }
