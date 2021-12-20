import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.ApiUrl;
  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }

  do_login(obj:any){
    return this._http.post<any>(this.apiUrl+"/auth", obj);
  }

  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    else
      return false;
  }

  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }

}
