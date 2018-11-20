import { Injectable } from '@angular/core';
import {Prefs } from "../models/prefs";
import {DatabaseService} from "../database.service";


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  constructor(private db: DatabaseService) {
  }
  getSource() {
  	if (this.db.prefs==null) return "en";
  	else return this.db.prefs.source; 
  }
  getTarget() {
  	if (this.db.prefs==null) return "es"
    else return this.db.prefs.target; 
  }
  setSource(s:string) {this.db.prefs.source=s;}
  setTarget(t:string) {this.db.prefs.target=t;}
  updateDB() {
  	this.db.updatePrefs();
  }
  fetch() {
  	console.log("fetch")
  	this.db.getPrefs().valueChanges()
  	.subscribe(x=>{
  		console.log("Got data back?");
  		console.log(x);
  	});
  }
}
