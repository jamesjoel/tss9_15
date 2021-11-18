import { Component, OnInit } from '@angular/core';
import { MyservService } from '../../../services/myserv.service';
import { HttpClient } from '@angular/common/http';
import { MyData, User } from '../../../models/allData.interface';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  allData:MyData[]=[];
  constructor(
    private a : MyservService,
    private _http : HttpClient
    
    ) { }

  ngOnInit(): void {
  }

  test(){
  //  let ans =this.a.demo(100, 50);
  //  console.log("ans--------", ans);

    this._http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe((result)=>{
      console.log(result);
      this.allData = result;
      
    })
    
  }

}
