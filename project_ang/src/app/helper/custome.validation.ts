import { FormGroup } from '@angular/forms';

export function numCheck(field:any){
    return function(myForm : FormGroup){
        let a = myForm.controls[field];
        // myForm.controls.contact

        if(a.errors && !a.errors.numErr)
        {
            return;
        }

        if(isNaN(a.value))
        {
            a.setErrors({ numErr : true });
        }
        else{
            a.setErrors(null);
        }
    }
}

export function sizeCheck(field:any){
    return function(myForm : FormGroup){
        let a = myForm.controls[field];

        if(a.errors && !a.errors.sizeErr)
        {
            return;
        }

        if(a.value.length < 10 || a.value.length > 11)
        {
            a.setErrors({ sizeErr : true });
        }
        else{
            a.setErrors(null);
        }
    }
}
export function passCheck(pass:any, repass:any)
{
    return function(myForm : FormGroup){
        let a = myForm.controls[pass];
        let b = myForm.controls[repass];

        if(b.errors && !b.errors.repassErr)
        {
            return;
        }
        if(a.value != b.value)
        {
            b.setErrors({ repassErr : true });
        }
        else{
            b.setErrors(null);
        }
    }
}