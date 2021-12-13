import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) {
    this.studentForm = this._fb.group({
      _id : [""],
      full_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      contact : ["", Validators.required],
      fee : ["", Validators.required],
      course : ["", Validators.required],
      address : ["", Validators.required]
    })

    this._course.getAll().subscribe(result=>{
      this.allCourse = result;
    });


    let a = this._actRoute.snapshot.paramMap.get("id");
    if(a){
      this._student.get(a).subscribe(result=>{
        // delete result._id;
        // console.log(result);
        this.studentForm.setValue(result);
        this.studentForm.controls.email.disable();
        
      })
    }

   }

  ngOnInit(): void {
  }
  submit(){
    if(this.studentForm.invalid){
      this.checkForm = true;
      return;
    }
    // console.log(this.studentForm.controls._id);
    
    if(this.studentForm.controls._id.value !=""){

      this._student.update(this.studentForm.value, this.studentForm.controls._id.value).subscribe(result=>{
        this._router.navigate(["/admin/student"]);
      })
    }
    else{

      this._student.save(this.studentForm.value).subscribe(result=>{
        this._router.navigate(["/admin/student"]);
      })
    }
  }
}
