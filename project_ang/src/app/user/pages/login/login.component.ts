import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  checkForm=false;
  errorMsg = "";
  
  constructor(
    private _fb : FormBuilder, 
    private _auth : AuthService,
    private _router : Router
    
    ) {
    this.loginForm = this._fb.group({
      username: ["", [Validators.required, Validators.email]],
      // usernmame : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    // alert();
    if(this.loginForm.invalid){
      this.checkForm=true;
      return;
    }
    // console.log(this.loginForm.value);
    this._auth.do_login(this.loginForm.value).subscribe((result)=>{
      // console.log(result);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/my-account"]);

    }, (err)=>{
      // console.log(err.error);
      if(err.error.type == 1)
      {
        this.errorMsg = "This Username/Email and Password dose not mached !";
      }
      if(err.error.type==2)
      {
        this.errorMsg = "This Password dose not mached !";

      }
    })
  }

}
