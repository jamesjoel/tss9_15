import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = environment.ApiUrl+"/student";
  constructor(
    private _http : HttpClient
  ) { }


  getAll(){
    return this._http.get<any>(this.apiUrl);
  }
  get(id:any){
    
    return this._http.get<any>(this.apiUrl+"/"+id);
  }
  update(obj:any, id:any){
    
    return this._http.put<any>(this.apiUrl+"/"+id, obj);
  }
  save(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
    
  }
  delete(id:any){
    return this._http.delete<any>(this.apiUrl+"/"+id);
  }
}
