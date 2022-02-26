import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imageForm : FormGroup;
  checkForm = false;
  allImage:any=[];


  constructor(
    private _fb : FormBuilder,
    private _http : HttpClient
  ) {
    this.imageForm = this._fb.group({
      name : ["", Validators.required],
      image : ["", Validators.required]
    })
    this._http.get<any>("http://localhost:3000/api/image").subscribe(result=>{
      this.allImage = result;
    })
   }

  ngOnInit(): void {
  }
  submit(file:any){
    let image = file.files[0];
    let form = new FormData();

    // image.forEach((x)=>{

    // })
    
    form.append("image", image);
    form.append("data", JSON.stringify(this.imageForm.value));
    this._http.post<any>("http://localhost:3000/api/image", form).subscribe(result=>{
      console.log(result);
      this.allImage.unshift(result);
    })
    // console.log(this.imageForm.value);
    /*
    
    if(this.imageForm.invalid){
      this.checkForm = true;
      return;
    }
    if(image.type != "image/jpeg" && image.type != "image/gif" && image.type !="image/png")
    {
      this.imageForm.controls.image.setErrors({"typeErr": true});
      this.checkForm=true;
      return;
    }
    // if(image.size == (1024*1024))
    if(image.size > (1024*1024))
    {
      this.imageForm.controls.image.setErrors({"sizeErr": true});
      this.checkForm=true;
      return;
    }

    // console.log(this.imageForm.value);

    let form = new FormData();
        form.append("image", image);
    form.append("data", JSON.stringify(this.imageForm.value));

    this._http.post<any>("http://localhost:3000/api/image", form).subscribe(result=>{
      console.log(result);
    })
    */
  }

  

}
