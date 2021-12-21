import { Directive } from '@angular/core';
import { ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  @Input() a:any;
  constructor(private _ref : ElementRef) {
    this._ref.nativeElement.style.backgroundColor = "red";
    this._ref.nativeElement.style.fontSize = "25px";
   }

   @HostListener('click') demo(){
     console.log(this.a);
   }
   @HostListener('mouseover') demo2(){
     this._ref.nativeElement.innerHTML="JAMES";
   }

}
