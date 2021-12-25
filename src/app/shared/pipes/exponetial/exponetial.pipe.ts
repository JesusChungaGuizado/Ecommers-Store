import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponetial'
})
export class ExponetialPipe implements PipeTransform {

  transform(value: number): unknown {
    return Math.pow(value,2);
  }

}
