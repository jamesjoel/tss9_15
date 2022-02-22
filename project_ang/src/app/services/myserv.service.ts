import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor(private _http : HttpClient) { }
  
  demo(x:any, z:any){
    let y = x+z;
    // console.log(y);
    return y;
  }
  getDataByUserName(u:any){
    //return this._http.post<any>("http://localhost:3000/api/user", { email : u });
    return { check : true }
  }


}
