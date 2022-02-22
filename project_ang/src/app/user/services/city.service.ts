import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/config';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http : HttpClient) { }

  getCity(){
      return this._http.get<any>(environment.ApiUrl+"/city");
    }
    totalRec(){
      
      return this._http.get<any>(environment.ApiUrl+"/city/total");
  }
}
