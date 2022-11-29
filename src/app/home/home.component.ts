
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { ICountries } from '../account';
import { CountriesDataService } from '../countries-data.service';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  regionSearch: any[] = [{ "val": "all", "name": "All Regions" }, { "val": "Africa", "name": "Africa" }, { "val": "Americas", "name": "Americas" },
  { "val": "Asia", "name": "Asia" }, { "val": "Europe", "name": "Europe" }, { "val": "Oceania", "name": "Oceania" }]

  countryFetch: ICountries[] = [];
  countryFetchBySearch: any[] = [];
  searchString: string = '';
  selectedString: string = '';
  loadSpinner: boolean = false;
  isDisable: boolean = true;
  selectedValue = '';
  accessToken: any;
  refreshToken: any;





  constructor(private countriesDService: CountriesDataService, private _authentService: AuthenticationService) { }

  ngOnInit(): void {
    // if (sessionStorage.getItem("accountType") === null) {
    //   location.href = "/logIn";
    //  }

    this.accessToken = this._authentService.getTokenStorage('access_token');
    this.refreshToken = this._authentService.getTokenStorage('refresh_token');



    if (this._authentService.isTokenExpired(this.accessToken) === true) {

      this._authentService.refreshToken(this.refreshToken);
    }


    this.fetchAllData();



  }

  logoutClick(): void {

    this._authentService.logout();

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
