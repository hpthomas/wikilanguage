import { Injectable } from '@angular/core';
import { config } from "../environments/environment";
import { Http } from '@angular/http';
import {GoogleService} from './google.service';
@Injectable({
  providedIn: 'root'
  
})
export class WikiService {

  constructor(private http: Http) { }
  search(term:string, source:string) {
  	var url = "https://" + source
  	+ ".wikipedia.org/w/api.php?action=query&prop=extracts&format=json&origin=*&titles="
  	+ term;
    return this.http.get(url);
  }

}
