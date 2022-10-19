
import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Icountries } from '../account';
import { CountriesDataService } from '../countries-data.service';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  regionSearch:any[]=[{"val":"Africa","name":"Africa"},{"val":"Americas","name":"Americas"},
  {"val":"Asia","name":"Asia"},{"val":"Europe","name":"Europe"},{"val":"Oceania","name":"Oceania"},{"val":"Oceania","name":"Oceania"},{"val":"Oceania","name":"Oceania"},{"val":"Oceania","name":"Oceania"}]
  
  countryFetch:Icountries[]=[];
  constructor(private countriesDService:CountriesDataService) { }

  ngOnInit(): void {
   // if(sessionStorage.getItem("type")===null){
     // location.href="/Login";
   // }
    this.more();
  }

  logoutClick():void{
  location.href="/Login";
  sessionStorage.clear;

  }
  more():void{
    this.countriesDService.getAllData().subscribe({
      next: countries=>{this.countryFetch=countries}
      
    })
     
  }
  moreOnClick():void{

    alert("hi");
  }
}
