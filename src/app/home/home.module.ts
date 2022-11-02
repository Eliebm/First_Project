import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CountryCardComponent } from '../country-card/country-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CountryCardComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule


  ]
})
export class HomeModule { }
