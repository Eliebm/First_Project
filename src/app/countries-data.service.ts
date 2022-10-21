import { Injectable } from '@angular/core';
import{HttpClient ,HttpErrorResponse}   from '@angular/common/http'
import { Observable, tap , catchError, throwError} from 'rxjs';
import { Icountries } from './account';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {
  
   
  private countriesUrl='https://restcountries.com/v3.1/all';
  constructor(private http:HttpClient ) { }
  
  getAllData(): Observable<Icountries[]>{
    
    return this.http.get<Icountries[]>(this.countriesUrl)
    .pipe(tap(data=> data)
    ,catchError(this.handleError));
    
  }
 
  private handleError(err:HttpErrorResponse){
   let errorMessage='';
   
   if(err.error instanceof ErrorEvent){
    errorMessage='An error occured : ${err.error.message}';
    
   }
   else{
    errorMessage='Server returned code: ${err.status}, error message is : ${err.message}';

   }
    console.error(errorMessage);
    return throwError(()=>errorMessage)
  }
}
