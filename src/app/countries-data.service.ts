import { Injectable } from '@angular/core';
import{HttpClient}   from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { Icountries } from './account';
@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {
  
   
  private countriesUrl='https://restcountries.com/v3.1/all';
  constructor(private http:HttpClient ) { }
  
  getAllData(): Observable<Icountries[]>{
    
    return this.http.get<Icountries[]>(this.countriesUrl).pipe(tap(data=> console.log(JSON.stringify(data))))
    
  }
}
