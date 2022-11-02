import { Component, Input, OnInit } from '@angular/core';
import { ICountries } from '../account';

@Component({
  selector: 'pm-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() countryData: ICountries[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  moreOnClick(countName: string): void {

    location.href = "http://localhost:4200/details/" + countName;
  }

}
