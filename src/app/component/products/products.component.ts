import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  x: any;
  constructor(public _api:ApiService){
    this._api.getProduct().subscribe(alldata=>{this.products=alldata}) }


  ngOnInit(): void {
  }
  
}