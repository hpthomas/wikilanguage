import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  searches: any[];
  constructor() { this.searches=[];}
  addSearch(term:string, time:string) {
    this.searches.push([term,time]);
  }
  history() {
    return this.searches;
  }
}
