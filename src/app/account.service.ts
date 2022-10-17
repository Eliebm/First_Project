import { Injectable } from '@angular/core';
import { IAccount } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  

  constructor() { }

  account:IAccount[]=[{
    Id:1,
    Name:'user',
    LastName:'user_lname',
    Email:'email@example.com',
    Password:'123',
    Type:'member'
  },
  {
    Id:2,
    Name:'admin',
    LastName:'user_lname',
    Email:'email@example.com',
    Password:'123',
    Type:'admin'
  }];

  getAccount(acname:any,accPassword:any,accType:any):boolean{
    
    var index = this.account.findIndex(e => e.Name === acname && e.Password=== accPassword && e.Type===accType);
    if (index !== -1) {
        return true;
    }
    else {return false;}
  }
}
