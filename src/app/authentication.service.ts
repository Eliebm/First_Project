import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "http://192.168.1.187:5005/swagger/index.html#/";

  constructor(private http: HttpClient) { }

  isUserLoggedIn: boolean = false;

  logIn(User: any): Observable<{}> {
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

  signIn(User: any) {
    return this.http
      .post<any>(this.url, User).subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);

      });
  }

  getWebStorageData(itemKey: string) {

    return sessionStorage.getItem(itemKey);
  }

  setWebStorageData(itemKey: string, itemValue: string) {
    sessionStorage.setItem(itemKey, itemValue);


  }
}
