import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public cobyhttpclient:HttpClient) { }
getProduct(){
  return this.cobyhttpclient.get("https://fakestoreapi.com/products")

}
}
