import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WikiResultsComponent } from "../wiki-results/wiki-results.component";
import { HistoryService } from "../history.service";
import { GoogleService } from "../google.service";
import { DatabaseService } from "../database.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(WikiResultsComponent)
  wikiChild:WikiResultsComponent;
  showPrefs:boolean;
  constructor(private hist:HistoryService, private gs:GoogleService, private db:DatabaseService) {
  }
  title = 'wiki';
  searchTerm:string;
  clear () {
    this.wikiChild.clear();
  }
  togglePrefs() {
  	this.clear();
  	this.showPrefs = !this.showPrefs;
  }
  search() {
  	if (this.showPrefs) {
  		this.togglePrefs();
  	}
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    this.hist.addSearch(this.searchTerm,time);
    this.wikiChild.search();
  }
  ngOnInit() {
  	// don't init db until logged in
  	console.log("init vb");
  	this.db.init();
  }
  // pass this function to child so prefs can be hidden after save
  getCloseParent() {
  	return ()=>this.togglePrefs();
  }

}
