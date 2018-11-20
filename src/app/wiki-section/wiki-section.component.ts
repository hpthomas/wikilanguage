import { Component, OnInit, Input } from '@angular/core';
import { TextSection } from "../models/text-section";
import { GoogleService } from "../google.service";
import { PreferencesService } from "../preferences/preferences.service";

@Component({
  selector: 'app-wiki-section',
  templateUrl: './wiki-section.component.html',
  styleUrls: ['./wiki-section.component.css']
})
export class WikiSectionComponent implements OnInit {
  @Input() section:TextSection;
  translated: string;
  constructor(private gs:GoogleService, private ps:PreferencesService) { }

  ngOnInit() {
  }
  translate() {
  	this.gs.translate(this.section.text, this.ps.getSource(), this.ps.getTarget())
  	.subscribe(r=>{
		var x=r.json();
		this.translated = x['data']['translations'][0]['translatedText'];
	});
  }
  hide () {
  	this.translated=undefined;
  }
}
