import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.ApiUrl;
  constructor(
    private _http : HttpClient
  ) { }

  do_login(obj:any){
    return this._http.post<any>(this.apiUrl+"/auth", obj);
  }
}
