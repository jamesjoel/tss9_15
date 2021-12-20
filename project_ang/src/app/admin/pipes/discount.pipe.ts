import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any){
    if(b=="B.Com."){
      return a*20/100;
    }
    else{
      return a*10/100;
    }
  }

}
