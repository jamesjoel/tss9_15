import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  // Decorater
  @Output() myEvent = new EventEmitter;
  @Output() formEvent = new EventEmitter;

  name="rohit";

  myForm={
    name : "",
    age : null
  }

  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    this.myEvent.emit(this.name);
  }

  send(){
    this.formEvent.emit(this.myForm);
  }
}
