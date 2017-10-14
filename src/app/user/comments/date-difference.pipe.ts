import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {
myDate=new Date();


  transform(value: Date, args?: any): any {

    let result=this.myDate.getTime()-value.getTime();
    return result/(86400000)
  }




}
