import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = environment.ApiUrl;
  constructor(
    private _http : HttpClient
  ) { }

  save(obj:any){
    return this._http.post<any>(this.api+"/user/signup", obj);
  }
}
