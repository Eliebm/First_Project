import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICountries } from '../account';
import { CountriesDataService } from '../countries-data.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']

})
export class DetailsComponent implements OnInit {
  private _localUrl = environment.baseUrl;
  countryData: ICountries[] = [];
  countryName: any;
  adminOptionList: any[] = [{ "name": "Home", "value": this._localUrl + "home" }, { "name": "Edit", "value": "" }, { "name": "Gallery ", "value": "" }];
  userOptionList: any[] = [{ "name": "Home", "value": this._localUrl + "home" }, { "name": "Gallery ", "value": "" }];
  optionList: any[] = [];
  sessionData: any;
  isEditable: boolean = false;



  constructor(private _countryDService: CountriesDataService, private _route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {

    this.sessionData = sessionStorage.getItem('accountType');
    if (this.sessionData === 'member') {
      this.optionList = this.userOptionList.map(item => item);

    } else { this.optionList = this.adminOptionList.map(item => item); }


    this.countryName = this._route.snapshot.paramMap.get('countName');
    this.getAllDetails();

  }

  getAllDetails(): void {

    this._countryDService.getCountryDetails(this.countryName).subscribe(data => this.countryData = data);


  }

  getDetailsOfBorderCountry(code: string): void {
    this._countryDService.getCountryDetailsByCode(code).subscribe(data => this.countryData = data);

  }
  goBack(): void {
    this._location.back();
  }





}
