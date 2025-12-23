import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToLogTime'
})
export class SecondsToLogTimePipe implements PipeTransform {

  transform(seconds: number): string {
    if (!seconds || seconds <= 0) {
      return '0h';
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    let result = '';

    if (hours > 0) {
      result += `${hours}h`;
    }

    if (minutes > 0) {
      result += (result ? ' ' : '') + `${minutes}m`;
    }

    return result || '0h';
  }
}
