import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) { 
    
    // this._router.events.subscribe((res:any)=>{
    //   // if(res instanceof NavigationEnd){
    //     // console.log(res.urlAfterRedirects)
    //   }
    // })
  }

  ngOnInit(): void {
    
  }

}
