import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor() { }
  demo(x:any, z:any){
    let y = x+z;
    // console.log(y);
    return y;
  }
}
