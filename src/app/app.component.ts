import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WikiResultsComponent } from "./wiki-results/wiki-results.component";
import { HistoryService } from "./history.service";
import { GoogleService } from "./google.service";
import { LoginService } from "./login/login.service";
import { PreferencesService} from "./preferences/preferences.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private hist:HistoryService, private gs:GoogleService, private ls:LoginService, private ps:PreferencesService) {
  }
  ngOnInit() {
  }
  logout() {
    this.ls.signOut();
  }
}
