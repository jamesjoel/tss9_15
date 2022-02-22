import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/config';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = environment.ApiUrl;
  constructor(
    private _http : HttpClient
  ) { }

  get(){
    // let token = JSON.stringify(localStorage.getItem("token"));
    // return this._http.get<any>(this.apiUrl+"/profile", {
    //   headers : {
    //     Authorization : token
    //   }
    // });
    return this._http.get<any>(this.apiUrl+"/profile");
  }
}

/*

return this._http.post<any>("", obj, {})
*/
