import { Injectable } from '@angular/core';
import { Account } from '../services/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = "http://localhost:8080/account/account";

  public bill=0;

  constructor(private http:HttpClient) { }

  public payto(account:Account){
    console.log(account);
    console.log("=================================================");
    console.log(JSON.stringify(account));
    
    var cal =  this.http.post(this.url+"/addaccount",account, { observe: 'response', responseType: 'json'}).subscribe();
    // return cal;
  }
}
