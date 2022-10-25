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


  constructor(private countryDService:CountriesDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllDetails();
    
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
