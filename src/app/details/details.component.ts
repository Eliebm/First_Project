import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icountries } from '../account';
import { CountriesDataService } from '../countries-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'pm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  countryData:Icountries[]=[];
  countryName:any;
  adminOptionList:any[]=[{"name":"Home","value":"http://localhost:4200/Home"},{"name":"Edit","value":""},{"name":"Gallery ","value":""}];
  userOptionList:any[]=[{"name":"Home","value":"http://localhost:4200/Home"},{"name":"Gallery ","value":""}];
  optionList:any[]=[];
  sessionData:any;
  isEditable:boolean=false;



  constructor(private countryDService:CountriesDataService, private route:ActivatedRoute,private location: Location) { }

  ngOnInit(): void {

   this.sessionData=sessionStorage.getItem('accountType');
   if(this.sessionData==='member'){
    this.optionList=this.userOptionList.map(item=>item);

   }else{this.optionList=this.adminOptionList.map(item=>item);}


    this.countryName=this.route.snapshot.paramMap.get('countName');
    this.getAllDetails();
    
  }
  
getAllDetails():void{

  this.countryDService.getCountryDetails(this.countryName).subscribe(data=>this.countryData=data);
  
  
}

 getBorderCountries(code:string):void{
  this.countryDService.getCountryDetailsByCode(code).subscribe(data=>this.countryData=data);
    
}
goBack():void{
 this.location.historyGo();

}





}
