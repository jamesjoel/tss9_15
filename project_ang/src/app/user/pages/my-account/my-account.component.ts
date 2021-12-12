import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(
    private _profileServ : ProfileService
  ) { 
    this._profileServ.get().subscribe(result=>{
      console.log(result);
    })
  }

  ngOnInit(): void {
  }

}
