import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icountries } from '../account';
import { CountriesDataService } from '../countries-data.service';

@Component({
  selector: 'pm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  countryData:Icountries[]=[];
  countryName:string="russia";
  adminOptionList:any[]=[{"name":"Home","value":"http://localhost:4200/Home"},{"name":"Edit","value":""},{"name":"Gallery ","value":""}];
  userOptionList:any[]=[{"name":"Home","value":"http://localhost:4200/Home"},{"name":"Gallery ","value":""}];
  optionList:any[]=[];
  constructor(private countryDService:CountriesDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllDetails();
    this.optionList=this.adminOptionList.map(item=>item);
  }
  
getAllDetails():void{

  this.countryDService.getCountryDetails(this.countryName).subscribe(data=>this.countryData=data);
  
  
}

 getBorderCountries(code:string):void{
  this.countryDService.getCountryDetailsByCode(code).subscribe(data=>this.countryData=data);
    
}
getmap(object:[]):void{

}





}
