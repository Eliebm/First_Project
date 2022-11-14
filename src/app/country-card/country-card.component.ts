import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICountries } from '../account';

@Component({
  selector: 'pm-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() countryData: ICountries[] = [];
  private _localUrl = environment.baseUrl;
  constructor() { }

  ngOnInit(): void {
  }
  moreOnClick(countName: string): void {

    location.href = this._localUrl + "details/" + countName;
  }

}
