
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICountries } from '../account';
import { CountriesDataService } from '../countries-data.service';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private localUrl = environment.baseUrl;
  regionSearch: any[] = [{ "val": "all", "name": "All Regions" }, { "val": "Africa", "name": "Africa" }, { "val": "Americas", "name": "Americas" },
  { "val": "Asia", "name": "Asia" }, { "val": "Europe", "name": "Europe" }, { "val": "Oceania", "name": "Oceania" }]

  countryFetch: ICountries[] = [];
  countryFetchBySearch: any[] = [];
  searchString: string = '';
  selectedString: string = '';
  loadSpinner: boolean = false;
  isDisable: boolean = true;
  selectedValue = 'all';





  constructor(private countriesDService: CountriesDataService) { }

  ngOnInit(): void {
    // if (sessionStorage.getItem("accountType") === null) {
    //   location.href = "/logIn";
    //  }


    this.fetchAllData();



  }

  logoutClick(): void {
    location.href = this.localUrl + "logIn";
    sessionStorage.clear;

  }
  fetchAllData(): void {


    this.countriesDService.getAllData().subscribe(countries => {
      if (countries) {

        this.countryFetchBySearch = countries;
        this.hideSpinner();

      }

    }
    );

    this.countriesDService.getAllData().subscribe(countries => this.countryFetch = countries);


  }


  hideSpinner(): void {

    this.loadSpinner = true;
    this.isDisable = false;

  }

  showSpinner(): void {
    this.loadSpinner = false;
    this.isDisable = true;

  }


  performFilter(filterBy: string): ICountries[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.countryFetch.filter((country: ICountries) => country.name.common.toLocaleLowerCase().includes(filterBy))

  }

  filterBySearch(event: any) {
    this.searchString = event.target.value;
    if (this.searchString === '') {

      this.countryFetchBySearch = this.performFilter(this.searchString);
    }
    this.countryFetchBySearch = this.performFilter(this.searchString);

  }

  filterBySelect(value: any): void {
    this.selectedString = value;
    if (this.selectedString === 'all') {
      this.showSpinner();
      this.fetchAllData();
    } else if (this.selectedString === undefined) {

    }
    else {
      this.showSpinner();
      this.getCountriesByRegion(this.selectedString);

    }

  }

  getCountriesByRegion(value: string): void {
    this.countriesDService.getSelectedRegion(value).subscribe(count => {
      this.showSpinner();
      if (count) {
        this.countryFetchBySearch = count;
        this.hideSpinner();

      }

    });
    this.countriesDService.getSelectedRegion(value).subscribe(count => this.countryFetch = count);



  }
}
