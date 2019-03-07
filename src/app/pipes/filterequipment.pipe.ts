import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filter Pipe für Equipment
*/
@Pipe({
  name: 'filterequipment',
  pure: false
})

export class FilterEquipmentPipe implements PipeTransform {

  transform(items: Array<any>, filterObjekt: {[key: string]: any }): Array<any> {
    if (!items || filterObjekt==undefined) {
      return items;
    }
   
    if(filterObjekt.objekt_id>0){

        if(filterObjekt.gebaeude_id>0){ //Objekt und Gebäude
            return items.filter(item => item.objekt_id==filterObjekt.objekt_id &&  item.gebaeude_id==filterObjekt.gebaeude_id);
        }else{  //nur Objekt
            return items.filter(item => item.objekt_id==filterObjekt.objekt_id);
        }

    }else{
        
        return items;
        
    }

  }
}
