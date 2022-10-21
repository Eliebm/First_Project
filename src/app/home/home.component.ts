

import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Icountries } from '../account';
import { CountriesDataService } from '../countries-data.service';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  regionSearch:any[]=[{"val":"all","name":"Search by region"},{"val":"Africa","name":"Africa"},{"val":"Americas","name":"Americas"},
  {"val":"Asia","name":"Asia"},{"val":"Europe","name":"Europe"},{"val":"Oceania","name":"Oceania"}]
  
  countryFetch:Icountries[]=[];
  countryFetchBySearch:any[]=[];
  searchString:string='';

  constructor(private countriesDService:CountriesDataService) { }

  ngOnInit(): void {
   // if(sessionStorage.getItem("type")===null){
     // location.href="/Login";
   // }
   this.fetchAllData();
  
  
  
  }

  logoutClick():void{
  location.href="/Login";
  sessionStorage.clear;

  }
  fetchAllData():void{
    this.countriesDService.getAllData().subscribe(countries=>this.countryFetchBySearch=countries);
    this.countriesDService.getAllData().subscribe(countries=>this.countryFetch=countries);
    
    
    
    
  }
  moreOnClick():void{

    alert("hi");
  }
  
  performFilter(filterBy:string):Icountries[]{
    
    filterBy=filterBy.toLocaleLowerCase();
    
    return this.countryFetch.filter((country:Icountries)=>country.name.common.toLocaleLowerCase().includes(filterBy))

  }

  filterBySearch(event: any){
    this.searchString= event.target.value;
    console.log(this.searchString);
    if(this.searchString ==='')
    {
     
      this.countryFetchBySearch=this.performFilter(this.searchString);
    }
    this.countryFetchBySearch=this.performFilter(this.searchString);

  }

  filterBySelect():void{
    this.searchString='';
    this.countryFetchBySearch=this.performFilter(this.searchString);
  }
}
