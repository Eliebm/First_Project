import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICountries } from '../account';
import { CountriesDataService } from '../countries-data.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'

import { environment } from 'src/environments/environment';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

import { AuthenticationService } from '../authentication.service';

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
  accessToken: any;
  refreshToken: any;


  constructor(private _countryDService: CountriesDataService, private _route: ActivatedRoute, private _location: Location, public dialog: MatDialog, private _authentService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.countryName = this._route.snapshot.paramMap.get('countName');
    this._countryDService.getAllData().subscribe(countries => this.dataOfAllCountries = countries);


    this.sessionData = this._authentService.getWebStorageData("accountType");



    if (this.sessionData === 'member') {
      this.optionList = this.userOptionList.map(item => item);

    } else { this.optionList = this.adminOptionList.map(item => item); }

    this.accessToken = this._authentService.getTokenStorage('access_token');
    this.refreshToken = this._authentService.getTokenStorage('refresh_token');



    if (this._authentService.isTokenExpired(this.accessToken) === true) {

      this._authentService.refreshToken(this.refreshToken);
    }


    this.getAllDetails();

  }

  getAllDetails(): void {

    this._countryDService.getCountryDetails(this.countryName).subscribe(data => { this.countryData = data });




  }

  getDetailsOfBorderCountry(code: string): void {
    this.countryData = this.dataOfAllCountries.filter((country: ICountries) => country.cca3.includes(code));

  }
  returnToLogIn(): void {
    this._authentService.logout();
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



