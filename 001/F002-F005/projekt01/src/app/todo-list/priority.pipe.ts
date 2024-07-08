import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from './models/Priority';

@Pipe({
  name: 'priority',
  pure: true
})
export class PriorityPipe implements PipeTransform {

  transform(value: Priority, ...args: unknown[]): unknown {
    let lang : string = String(args[0]);

    if(lang == 'EN'){
      switch(value){
        case Priority.HIGH: return 'high';
        case Priority.MEDIUM: return 'medium';
        default: return 'low';
      }
    }
    else{ // minden más eset pl. HU
      switch(value){
        case Priority.HIGH: return 'magas';
        case Priority.MEDIUM: return 'közepes';
        default: return 'alacsony';
      }
    }
  }

}
