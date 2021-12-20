import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/config';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl = environment.ApiUrl;
  constructor(
    private _http : HttpClient
  ) {

   }

  getAll(){
    return this._http.get<any>(this.apiUrl+"/course");
  }
}
