import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity : any[]=[];
  itemPerPage = 100;
  totalRec = 0;
  totalPages = 0;
  constructor(private _city : CityService) {
    this._city.getCity().subscribe(data=>{
      this.allCity = data;
      console.log(data);
    });

    this._city.totalRec().subscribe(data=>{
      this.totalRec = data.totalrecord;
      this.totalPages = Math.ceil(this.totalRec/this.itemPerPage);
    })
   }

  ngOnInit(): void {
  }

}
