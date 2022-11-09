import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICountries } from '../account';
import { CountriesDataService } from '../countries-data.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { environment } from 'src/environments/environment';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'pm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']

})

export class DetailsComponent implements OnInit {
  private _localUrl = environment.baseUrl;
  countryData: ICountries[] = [];
  countryName: any;
  adminOptionList: any[] = [{ "name": "Edit", "value": "edit" }, { "name": "Gallery ", "value": "gallery" }];
  userOptionList: any[] = [{ "name": "Gallery ", "value": "gallery" }];
  optionList: any[] = [];
  sessionData: any;
  isEditable: boolean = false;




  constructor(private _countryDService: CountriesDataService, private _route: ActivatedRoute, private _location: Location, public dialog: MatDialog) { }

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
  returnToLogIn(): void {
    location.href = this._localUrl + 'logIn';
    sessionStorage.clear();
  }

  openEditDialog(): void {
    console.log("dialog opened");
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: this.countryData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  checkButtonStatus(buttonValue: string) {
    if (buttonValue === "edit") {
      this.openEditDialog();
    } else {
      console.log("gallery");
    }
  }
}



