import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, str: string, field: string | number ): any {
    return value.filter((item) => item[field].toString().toLowerCase().indexOf(str.toLowerCase()) > -1);
  }

}
