import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {

  transform(value: Date): string {

    let date1: Date = new Date();
    let timeDiff: number = Math.abs(date1.getTime() - value.getTime());
    let diffDays: number = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (diffDays < 1) {
      diffDays = Math.floor(timeDiff / (1000 * 3600));
      if (diffDays < 1) {
        diffDays = Math.floor(timeDiff / (1000 * 60))
        return diffDays + ' m'
      }
      return diffDays + ' h'
    }
    else {
      return diffDays + ' d'
    }

  }
}
