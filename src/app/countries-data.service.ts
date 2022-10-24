import { Injectable } from '@angular/core';
import{HttpClient ,HttpErrorResponse}   from '@angular/common/http'
import { Observable, tap , catchError, throwError} from 'rxjs';
import { Icountries } from './account';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {
  
   
  
  constructor(private http:HttpClient ) { }
  
  getAllData(): Observable<Icountries[]>{
    
    return this.http.get<Icountries[]>('https://restcountries.com/v3.1/all')
    .pipe(tap(data=> data)
    ,catchError(this.handleError));
    
  }

getSelectedRegion(_region:string):Observable<Icountries[]>{
  return this.http.get<Icountries[]>('https://restcountries.com/v3.1/region/'+_region)
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
