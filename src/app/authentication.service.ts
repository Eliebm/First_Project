import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn: boolean = false;

  login(User: any): Observable<{}> {
    console.log(User.name);
    console.log(User.password);

    this.isUserLoggedIn = User.name == 'admin' && User.password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log("Is User Authentication is successful: " + val);
      })
    );
  }


  getWebStorageData(itemKey: string) {

    return sessionStorage.getItem(itemKey);
  }

  setWebStorageData(itemKey: string, itemValue: string) {
    sessionStorage.setItem(itemKey, itemValue);


  }
}
