import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki-search';
  searchResultsFromSearchBox: any = null;

  showResults(results: any){
    this.searchResultsFromSearchBox = results;
  }
}
