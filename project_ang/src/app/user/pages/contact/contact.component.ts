import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm:FormGroup;
  checkForm=false;
  
  constructor(private _fb : FormBuilder) {
    this.myForm = this._fb.group(
      {
        name : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]]
      }
    );
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.myForm.invalid){
      this.checkForm=true;
      return;
    }
    console.log(this.myForm.value);
  }
}
