import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ICountries } from '../account';

@Component({
  selector: 'pm-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICountries[]) { }



  ngOnInit(): void {


  }
  editForm = new FormGroup({
    commonName: new FormControl(this.data[0].name.common, [Validators.required]),
    officialName: new FormControl(this.data[0].name.official, [Validators.required]),
    capital: new FormControl(this.data[0].capital, [Validators.required]),
    region: new FormControl(this.data[0].region, [Validators.required]),
    subRegion: new FormControl(this.data[0].subregion, [Validators.required]),
    area: new FormControl(this.data[0].area, [Validators.required]),
    population: new FormControl(this.data[0].population, [Validators.required])

  });


  get commonNameValidation() {
    return this.editForm.get('commonName');

  }
  get officialNameValidation() {
    return this.editForm.get('officialName');
  }
  get capitalValidation() {
    return this.editForm.get('capital');
  }
  get regionValidation() {
    return this.editForm.get('region');
  }
  get subRegionValidation() {
    return this.editForm.get('subRegion');
  }
  get areaValidation() {
    return this.editForm.get('area');
  }
  get populationValidation() {
    return this.editForm.get('population');
  }




  closeDialoge(): void {
    this.dialogRef.close();

  }

  saveNewData(): void {



    this.data[0].name.common = this.commonNameValidation?.value!;
    this.data[0].name.official = this.officialNameValidation?.value!;
    this.data[0].capital = this.capitalValidation?.value!;
    this.data[0].region = this.regionValidation?.value!;
    this.data[0].subregion = this.subRegionValidation?.value!;
    this.data[0].area = this.areaValidation?.value!;
    this.data[0].population = this.populationValidation?.value!;


    this.dialogRef.close();
  }
}
