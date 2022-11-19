import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ICountries } from '../account';

@Component({
  selector: 'pm-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  public inputName: string = this.data[0].name.common;
  public inputOfficialName: string = this.data[0].name.official;
  public inputCapital: string = this.data[0].capital;
  public inputRegion: string = this.data[0].region;
  public inputSubRegion: string = this.data[0].subregion;
  public inputArea: any = this.data[0].area;
  public inputPopulation: any = this.data[0].population;


  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICountries[],) { }

  ngOnInit(): void {

  }
  closeDialoge(): void {
    this.dialogRef.close();

  }

  saveNewData(): void {
    this.data[0].name.common = this.inputName;
    this.data[0].name.official = this.inputOfficialName;
    this.data[0].capital = this.inputCapital;
    this.data[0].region = this.inputRegion;
    this.data[0].subregion = this.inputSubRegion;
    this.data[0].area = this.inputArea;
    this.data[0].population = this.inputPopulation;

    this.dialogRef.close();
  }
}
