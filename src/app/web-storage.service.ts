import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  getWebStorageData(itemKey: string) {

    return sessionStorage.getItem(itemKey);
  }

  setWebStorageData(itemKey: string, itemValue: string) {
    sessionStorage.setItem(itemKey, itemValue);


  }

}


