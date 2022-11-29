import { HttpClient, HttpContextToken, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  localUrl = "http://localhost:5005/api/User/";
  apiUrl = "http://192.168.1.187:5005/api/User/";




  constructor(private http: HttpClient) { }

  isUserLoggedIn: boolean = false;

  /*logIn(User: any): Observable<{}> {


    this.isUserLoggedIn = User.name == 'admin' && User.password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
        console.log(" User Authentication is successful: " + val);
      })
    );
  }*/

  signIn(name: string, password: string) {


    return this.http
      .post(this.apiUrl + "Login()", { 'Username': name, "Password": password }).pipe(tap(data => data));

  }

  setTokenStorage(type: string, token: string) {
    localStorage.setItem(type, token)
  }

  getTokenStorage(type: string) {
    return localStorage.getItem(type);
  }
  getWebStorageData(itemKey: string) {

    return sessionStorage.getItem(itemKey);
  }

  setWebStorageData(itemKey: string, itemValue: string) {
    sessionStorage.setItem(itemKey, itemValue);


  }
  logout() {
    location.href = "/logIn";
    sessionStorage.clear();
    localStorage.clear();
  }

  isTokenExpired(token: string) {

    const expiry = JSON.parse(atob(token.split('.')[1]));

    return expiry.exp > Date.now();
  }

  refreshToken(token: any) {
    this.http.post(this.apiUrl + "RefreshToken()", { 'RefreshToken': token }).subscribe((resp: any) => {
      this.setTokenStorage('refresh_token', resp.RefreshToken);
      this.setTokenStorage('access_token', resp.AccessToken);


    }, (error: HttpErrorResponse) => {

      this.logout();

    }
    );
  }
}
