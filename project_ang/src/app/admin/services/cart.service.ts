import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // myobs:any;
  // mydata:any;
  myobs = new BehaviorSubject(0);
  // this is Subject
  // this.myobj.subscribe(data=>{

  // })
  mydata = this.myobs.asObservable();
  // Observable by its subject
  // this.mydata.update()


  constructor() {
    //this.myobs.update();
   }

  update(a:any){
    this.myobs.next(a);
  }
  
}
