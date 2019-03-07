import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filter Pipe
*/
@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], field : string, value : any, likefield? : string, likepattern? : string): any {
      if (!items || field=='') {
          return items;
      }
      return items.filter(function(it){

        if(likefield){
          if(field === 'LIKE'){
            if(it[likefield].toLowerCase().indexOf(likepattern.toLowerCase()) > -1){
              return it;
            }
          }else{
            if(it[field] === value && it[likefield].toLowerCase().indexOf(likepattern.toLowerCase()) > -1){
              return it;
            }
          }          
        }else{

          if(value === 'true' || value === 'false'){
            if(value === 'true'){
              value=true;
            }else{
              value=false;
            }
          }

          if(it[field] === value){
            return it;
          }
        }

      })

  }
}