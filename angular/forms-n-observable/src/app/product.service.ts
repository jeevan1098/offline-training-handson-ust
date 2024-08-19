import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/Product-simple';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

   async saveProduct(product : Product){
    console.log(product)
    let url = "http://localhost:8082/api/v1/product"
    //return this.httpClient.post(url,product)
   await fetch(url,{method:"post",body:JSON.stringify(product),headers:{'Content-Type':'application/json'}})
  }


}
