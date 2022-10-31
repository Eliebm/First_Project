
import { Component, OnInit } from '@angular/core';
import { observable, Subject, Subscription } from 'rxjs';
import { Icountries } from '../account';
import { CountriesDataService } from '../countries-data.service';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  regionSearch:any[]=[{"val":"all","name":"All Region"},{"val":"Africa","name":"Africa"},{"val":"Americas","name":"Americas"},
  {"val":"Asia","name":"Asia"},{"val":"Europe","name":"Europe"},{"val":"Oceania","name":"Oceania"}]
  
  countryFetch:Icountries[]=[];
  countryFetchBySearch:any[]=[];
  searchString:string='';
  selectedString:string='';
  loadSpinner:boolean=false;
  isDisable:boolean=true;
  
 


  constructor(private countriesDService:CountriesDataService) { }

  ngOnInit(): void {
   if(sessionStorage.getItem("accountType")===null){
      location.href="/Login";
   }

   
   this.fetchAllData();
   
  
  
  }

  logoutClick():void{
  location.href="/Login";
  sessionStorage.clear;

  }
  fetchAllData():void{

    
    this.countriesDService.getAllData().subscribe(countries=>
      
      {if(countries){
        
       this.countryFetchBySearch=countries ;
         this.hideSpinner();
        
       }
       
     }
      );
     
    this.countriesDService.getAllData().subscribe(countries=> this.countryFetch=countries);
      
  
  }


  hideSpinner():void{
    
    this.loadSpinner=true;
    this.isDisable=false;
    console.log("spinner false");
  }
  
  showSpinner():void{
    this.loadSpinner=false;
    this.isDisable=true;
    console.log("spinner true");
  }

  moreOnClick(countName:string):void{

    location.href="http://localhost:4200/details/"+countName;
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

  filterBySelect(value: any):void{
    this.selectedString=value;
    if(this.selectedString==='all'){
      this.showSpinner();
      this.fetchAllData();
       }
    else{
      this.showSpinner();
      this.getCountriesByRegion(this.selectedString);
     
    }
    console.log(this.selectedString);
  }

  getCountriesByRegion(value:string):void{
    this.countriesDService.getSelectedRegion(value).subscribe(count=>
      {this.showSpinner();
        if(count){
          this.countryFetchBySearch=count ;
          this.hideSpinner();
       
      }
      
    });
    this.countriesDService.getSelectedRegion(value).subscribe(count=>this.countryFetch=count);
    


  }
}
