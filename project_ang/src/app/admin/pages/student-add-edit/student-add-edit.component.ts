import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.css']
})
export class StudentAddEditComponent implements OnInit {

  allCourse:any=[];
  studentForm : FormGroup;
  checkForm = false;
  constructor(
    private _fb : FormBuilder,
    private _course : CourseService,
    private _student : StudentService,
    private _router : Router
  ) {
    this.studentForm = this._fb.group({
      full_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      contact : ["", Validators.required],
      fee : ["", Validators.required],
      course : ["", Validators.required],
      address : ["", Validators.required]
    })

    this._course.getAll().subscribe(result=>{
      this.allCourse = result;
    })

   }

  ngOnInit(): void {
  }
  submit(){
    if(this.studentForm.invalid){
      this.checkForm = true;
      return;
    }
    // console.log(this.studentForm.value);
    this._student.save(this.studentForm.value).subscribe(result=>{
      this._router.navigate(["/admin/student"]);
    })
  }
}
