import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn:any;
  allStudent : any = [];
  allComments : any = [];
  showSpinner=false;
  student:any;
  constructor(
    private _stu : StudentService,
    private _http : HttpClient

  ) {
    // this._stu.getAll().subscribe(result=>{
    //   this.allStudent = result;
    // })
   }

  ngOnInit(): void {
  }

  askDelete(obj:any){
    // console.log(obj);/
    this.student = obj;
    
  }

  confDelete(){

    

    this._stu.delete(this.student._id).subscribe(result=>{
      // console.log(result);
      let n = this.allStudent.indexOf(this.student);
      this.allStudent.splice(n, 1)
      
      this.closeBtn.nativeElement.click();
    })
  }

  getData(){
    this.showSpinner = true;
    this._http.get<any>("https://jsonplaceholder.typicode.com/albums").subscribe(result=>{
      this.allComments = result;
      this.showSpinner = false;
    })
  }
}
