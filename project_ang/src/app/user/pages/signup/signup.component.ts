import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { numCheck, sizeCheck, passCheck } from '../../../helper/custome.validation';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  checkForm=false;

  constructor(
    private _fb : FormBuilder,
    private _user : UserService
    ) {
    this.signupForm = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      contact : ["", Validators.required],
      city : ["", Validators.required],
    },
    {
      validator : [numCheck('contact'), sizeCheck('contact'), passCheck('password', 're_password')]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.signupForm.invalid){
      this.checkForm=true;
      return;
    }
    // console.log(this.signupForm.value);
    this._user.save(this.signupForm.value).subscribe((result)=>{
      console.log(result);
    })
  }

}
