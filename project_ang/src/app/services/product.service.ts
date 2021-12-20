import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = environment.ApiUrl;
  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(this.api+"/product");
  }
  save(obj:any){
    return this._http.post<any>(this.api+"/product", obj)
  }
  update(){

  }
  delete(){

  }
}
