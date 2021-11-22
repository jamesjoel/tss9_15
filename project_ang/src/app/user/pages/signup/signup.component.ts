import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  checkForm=false;

  constructor(private _fb : FormBuilder) {
    this.signupForm = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      contact : ["", Validators.required],
      city : ["", Validators.required],
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.signupForm.invalid){
      this.checkForm=true;
      return;
    }
  }

}
