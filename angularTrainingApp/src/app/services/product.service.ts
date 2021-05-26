import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl:string = environment.productBaseUrl;
  constructor(private _httpClint:HttpClient) { 

  }

  getProducts():Observable<Array<Product>>{
    return this._httpClint.get<Array<Product>>(this._baseUrl,{
      headers : new HttpHeaders({"Access-Control-Allow-Origin":"*","cid":"sfklsjdlfkdsjlfdsjfjds1ikl12j1k2j3"})
    });
  }

  getProduct(id:string):Observable<Array<Product>>{
    return this._httpClint.get<Array<Product>>(`${this._baseUrl}/${id}`,{
      headers:new HttpHeaders({"Access-Control-Allow-Origin":"*"})
    });
  }
}
