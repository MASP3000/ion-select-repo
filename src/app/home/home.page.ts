import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	
	/** Auswahl Optionen für Objekte  */
	selectOptions={};
	/** aktuelle Objekt Id  */
	currentObjektId	: number=0;
	/** Objekte Array  */
	objekte			: { id: number,kurzname: string, online_id: number, admin: number,bilder: number }[];
	/** aktuelle Gebäude Id  */
	currentGebId	: number=0;
	/** Aktuelle Gebäude Information Array  */
	geb		: { id: number,bezeichnung: string, online_id: number,objekt_id: number,bilder: number}[];
	
	constructor(
		
  ) {
	  
	this.selectOptions = {
		header: 'Objekte'
    };
	
	this.objekte=[];
	
  }
  
  changeObjekt(){
    console.log('selected Object',this.currentObjektId);
    
    this.currentGebId
    for(let r = 0; r < this.geb.length; r++) {
      if(this.geb[r].objekt_id==this.currentObjektId) this.currentGebId=this.geb[r].id;
    }
  }
  
  selectObjekt(){
    this.currentObjektId=2;
    for(let r = 0; r < this.geb.length; r++) {
      if(this.geb[r].objekt_id==this.currentObjektId) this.currentGebId=this.geb[r].id;
    }
  }
  
  ngOnInit() {
	  
    this.loadObjekte().then((result) => {

        this.currentObjektId=3;
        this.loadGeb();

    },(error)=>{
      console.log('Error loadObjekte',error.message);
    });
	  
  }
  
  /**
	* lädt die Objekte
	*/
	loadObjekte(): Promise<any> {
    	
		return new Promise((resolve, reject) => {

			
			this.objekte=[
				{id: "1",kurzname: 'Obj1', online_id: 0, admin: 0,bilder: 0},
				{id: "2",kurzname: 'Obj2', online_id: 0, admin: 0,bilder: 0},
				{id: "3",kurzname: 'Obj3', online_id: 0, admin: 0,bilder: 0},
				];
			resolve(true);


		});
	}
	
	/**
	* lädt die Objekte
	*/
	loadGeb() {
    	
			this.geb=[
				{id: 1,bezeichnung: 'G11', online_id: 0,objekt_id: 1,bilder: 0},
				{id: 2,bezeichnung: 'G21', online_id: 0,objekt_id: 2,bilder: 0},
				{id: 3,bezeichnung: 'G31', online_id: 0,objekt_id: 3,bilder: 0},
				];
		
	}

}
