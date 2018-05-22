import { Pipe, PipeTransform } from '@angular/core';
import {Statuses} from './app.component';

@Pipe({
  name: 'nextActionName'
})
export class NextActionNamePipe implements PipeTransform {

  transform(status: Statuses): string {
    console.log('pipe next action');
    switch (status) {
      case 'CREATED':
        return 'start';
      case 'STARTED':
        return 'finish';
      case 'DONE':
        return 'pick up';
    }

  }

}
