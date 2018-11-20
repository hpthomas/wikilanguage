import { SimpleChanges, Input, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { WikiService } from "../wiki.service";
import { TextSection } from "../models/text-section";
import {PreferencesService} from "../preferences/preferences.service";

@Component({
  selector: 'app-wiki-results',
  templateUrl: './wiki-results.component.html',
  styleUrls: ['./wiki-results.component.css']
})
export class WikiResultsComponent implements OnInit {

  constructor(private wiki:WikiService, private ps:PreferencesService) { this.results= []; }
  @Input() term:string;
  results:TextSection[];
  clear() {
  	this.results = [];
  }
  ngOnInit() {
  }
  search() {
    this.clear();
  	this.wiki.search(this.term, this.ps.getSource())
  	.subscribe(r=>{
  		var x=r.json();
  		var pages = x['query']['pages'];
      if (pages==undefined) return;
      var page = pages[Object.keys(pages)[0]]["extract"];
      var div = document.createElement("div");
      div.innerHTML = page;
      Array.from(div.children).forEach(node => {
        var n = <HTMLElement> node;
        if (n.nodeName == "P" || n.nodeName[0].toUpperCase()=="H") {
          if (n.innerText.length > 2) {
            this.results.push(new TextSection(n.nodeName,n.innerText, n.innerHTML));
          }
        }
      });
	});
  }

  ngOnChanges(changes:SimpleChanges) {
  }
}
