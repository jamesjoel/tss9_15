import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myobs = new BehaviorSubject(0);
  mydata = this.myobs.asObservable();
   constructor() {
 
   }

  update(a:any){
    this.myobs.next(a);
  }
  
}
