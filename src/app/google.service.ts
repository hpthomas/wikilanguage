import { Injectable } from '@angular/core';
import { config } from "../environments/environment";
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  constructor(private http: Http) { }
  translate(text:string, source:string, target:string) {
  	var url = "https://translation.googleapis.com/language/translate/v2?"
  	+ "target="+target
  	+ "&source=" + source
  	+ "&q=" + encodeURI(text)
  	+ "&format=text"
  	+ "&key=" + config.key;
  	console.log(url);
	return  this.http.get(url);
  }

}
