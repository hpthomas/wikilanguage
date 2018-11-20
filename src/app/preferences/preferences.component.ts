import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {PreferencesService} from "./preferences.service";


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  @Input() closeParent:Function;
  languages:string[];
  fullToShort:any;
  shortToFull:any;
  fullSource:string;
  fullTarget:string;
  pairSame:boolean;

  constructor(private router:Router, private ps:PreferencesService) {
  	this.fullToShort = {
		"English":"en",
		"Spanish": "es",
		"Dutch":"nl",
		"French":"fr",
		"German":"de",
		"Japanese":"ja",
		"Korean":"ko"
    };
    this.shortToFull={};
    for (var key in this.fullToShort) {
    	this.shortToFull[this.fullToShort[key]] = key;
    }
    this.languages = Object.keys(this.fullToShort);
    this.fullSource = this.shortToFull[ps.getSource()];
    this.fullTarget = this.shortToFull[ps.getTarget()];
  }
  cancel() {
  	this.closeParent();
  }
  save() {
  	if (this.fullSource == this.fullTarget) {
  		this.pairSame=true;
  		return;
  	}
  	this.ps.setSource(this.fullToShort[this.fullSource]);
  	this.ps.setTarget(this.fullToShort[this.fullTarget]);
  	this.ps.updateDB();
  	this.closeParent();
  }
  ngOnInit() {
    this.ps.fetch();
  }

}
