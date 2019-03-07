import { Pipe, PipeTransform } from "@angular/core";

/**
 * Sortierung Pipe
*/
@Pipe({
  name: "orderBy",
  pure: false
})
export class OrderByPipe implements PipeTransform {

    orderType:boolean=true;

    transform( items: any[], orderField: string, order: string ): any {
       
        if(order=='ASC'){
            this.orderType=false;
        }else{
            this.orderType=true;
        }

        items.sort( ( a: any, b: any ) => {
            let ae = a[ orderField ];
            let be = b[ orderField ];
            if ( ae == undefined && be == undefined ) return 0;
            if ( ae == undefined && be != undefined ) return this.orderType ? 1 : -1;
            if ( ae != undefined && be == undefined ) return this.orderType ? -1 : 1;
            if ( ae == be ) return 0;
            return this.orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
        } );
        
        return items;
    }
}