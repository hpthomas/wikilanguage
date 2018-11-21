import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import {switchMap} from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
// import * as firebase from 'firebase';
import * as firebase from 'firebase/app';
import {Prefs} from "./models/prefs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  userId:string;
  prefs:Prefs = null;
  items: any = null;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }
  init() {
    this.afAuth.authState.subscribe(user => {
      if(user) { 
        this.userId = user.uid;
        this.getPrefs().valueChanges()
        .subscribe(data=>{
          console.log("got  prefs");
          console.log(data[0] + "->" + data[1]);
          this.prefs=new Prefs(<string>data[0],<string>data[1]);
        })
      }
    });  
  }
  updatePrefs() {
    this.db.list(`users/${this.userId}`)
    .set("prefs",this.prefs);
  }
  getPrefs() {
    console.log("gp");
    return this.db.list(`users/${this.userId}/prefs`);
  }

  

}
