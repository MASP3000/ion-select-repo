import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filter Pipe für mehrere Felder
*/
@Pipe({
  name: 'filtermultiple',
  pure: false
})

export class FilterMultiplePipe implements PipeTransform {

  transform(items: Array<any>, filterObjekt: {[key: string]: any }): Array<any> {
    if (!items || filterObjekt==undefined) {
      return items;
    }
    return items.filter(item => {
        let notMatchingField = Object.keys(filterObjekt).find(key => item[key] !== filterObjekt[key]);

        return !notMatchingField; // true if matches all fields
    });
  }
}
