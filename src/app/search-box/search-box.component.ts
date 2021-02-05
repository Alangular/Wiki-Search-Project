import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WikiSearchService } from '../wiki-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  keyword: string = "";
  searchResults: any = {};
  @Output() notifyParent = new EventEmitter<any>();

  constructor(private _wikiSearchService: WikiSearchService) { }

  search(event: any){
    if(event.key == "Enter") {
      this._wikiSearchService.fetchResults(this.keyword).subscribe(res => {
        this.searchResults = res;
        this.notifyParent.emit(this.searchResults);
      });
    }
  }
  
  ngOnInit(): void {
  }

}
