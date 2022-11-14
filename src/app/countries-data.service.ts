import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ICountries } from './account';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {
  private API_Url = environment.restCountriesUrl;


  constructor(private http: HttpClient) { }

  getAllData(): Observable<ICountries[]> {

    return this.http.get<ICountries[]>(this.API_Url + 'all')
      .pipe(tap(data => data)
        , catchError(this.handleError));

  }

  getSelectedRegion(_region: string): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(this.API_Url + 'region/' + _region)
      .pipe(tap(data => data)
        , catchError(this.handleError));


  }

  getCountryDetails(countryName: string): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(this.API_Url + 'name/' + countryName)
      .pipe(tap(data => data)
        , catchError(this.handleError));

  }
  getCountryDetailsByCode(code: string): Observable<ICountries[]> {
    return this.http.get<ICountries[]>(this.API_Url + 'alpha/' + code)
      .pipe(tap(data => data)
        , catchError(this.handleError));


  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured : ${err.error.message}';

    }
    else {
      errorMessage = 'Server returned code: ${err.status}, error message is : ${err.message}';

    }
    console.error(errorMessage);
    return throwError(() => errorMessage)
  }
}
