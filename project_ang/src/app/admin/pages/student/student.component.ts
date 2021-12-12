import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn:any;
  allStudent : any = [];
  student:any;
  constructor(
    private _stu : StudentService
  ) {
    this._stu.getAll().subscribe(result=>{
      this.allStudent = result;
    })
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
}
