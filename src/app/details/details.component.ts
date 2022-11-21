import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICountries } from '../account';
import { CountriesDataService } from '../countries-data.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'

import { environment } from 'src/environments/environment';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { WebStorageService } from '../web-storage.service';

@Component({
  selector: 'pm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']

})

export class DetailsComponent implements OnInit {
  private _localUrl = environment.baseUrl;

  countryData: ICountries[] = [];
  borderCountryName: string = '';
  dataOfAllCountries: ICountries[] = [];
  dataOfBorderCountry: ICountries[] = [];
  countryName: any;
  adminOptionList: any[] = [{ "name": "Edit", "value": "edit" }, { "name": "Gallery ", "value": "gallery" }];
  userOptionList: any[] = [{ "name": "Gallery ", "value": "gallery" }];
  optionList: any[] = [];
  sessionData: any;


  constructor(private _countryDService: CountriesDataService, private _route: ActivatedRoute, private _location: Location, public dialog: MatDialog, private _webStorage: WebStorageService
  ) { }

  ngOnInit(): void {

    this.countryName = this._route.snapshot.paramMap.get('countName');
    this._countryDService.getAllData().subscribe(countries => this.dataOfAllCountries = countries);


    this.sessionData = this._webStorage.getWebStorageData("accountType");
    console.log(this.sessionData);


    if (this.sessionData === 'member') {
      this.optionList = this.userOptionList.map(item => item);

    } else { this.optionList = this.adminOptionList.map(item => item); }




    this.getAllDetails();

  }

  getAllDetails(): void {

    this._countryDService.getCountryDetails(this.countryName).subscribe(data => { this.countryData = data });




  }

  getDetailsOfBorderCountry(code: string): void {
    this.countryData = this.dataOfAllCountries.filter((country: ICountries) => country.cca3.includes(code));

  }
  returnToLogIn(): void {
    location.href = '/logIn';
    sessionStorage.clear();
  }

  openEditDialog(): void {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this.countryData,
    });

  }
  getNameOfBorderCountry(code: string): void {
    this.dataOfBorderCountry = this.dataOfAllCountries.filter((country: ICountries) => country.cca3.includes(code));
    this.borderCountryName = this.dataOfBorderCountry[0].name.common;
  }

  checkButtonStatus(buttonValue: string) {
    if (buttonValue === "edit") {
      this.openEditDialog();
    } else {
      console.log("gallery");
    }
  }
}



