import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url:any;
  constructor(
    public _auth : AuthService,
    public _router : Router,
    public _actRoute : ActivatedRoute
    
  ) {

    // this._router.events.subscribe(res=>{
    //   console.log(res);
    //   // this.url = res.NavigationEnd.url;
    // })
  }
  
  ngOnInit(): void {
    this._router.events.subscribe((res:any)=>{
      if(res instanceof NavigationEnd){
        console.log(res.urlAfterRedirects)
      }
      // console.log(res.);
    })
  }

}
