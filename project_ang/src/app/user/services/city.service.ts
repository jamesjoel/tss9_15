import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/config';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http : HttpClient) { }

  getCity(pageno:any, total:any){
      return this._http.get<any>(environment.ApiUrl+"/city/"+pageno+"/"+total);
    }
    totalRec(){
      
      return this._http.get<any>(environment.ApiUrl+"/city/total");
  }
}
