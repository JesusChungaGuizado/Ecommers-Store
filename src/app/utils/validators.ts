import { AbstractControl } from "@angular/forms";
export class MyValidators{
    static isPriceValid(control:AbstractControl){
        const valor=control.value;
        console.log(valor)
        if(valor>1000){
            return {price_invalid:true};
        }
        return null;
    }

}