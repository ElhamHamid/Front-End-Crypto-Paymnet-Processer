import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient) { }

  getUrlForPayment(body:any){
    let url=' https://crypto-processer-back-end-app.herokuapp.com/charges'
    return this.http.post( url,body);
  }
}
