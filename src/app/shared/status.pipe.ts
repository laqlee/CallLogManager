import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 2:
        return 'Closed';

      default:
        return 'Open';
    }
  }
}
