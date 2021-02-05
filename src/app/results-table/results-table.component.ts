import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  @Input() searchResultsForResultsTable:any = {};
  displayedColumns: string[] = ['index', 'title', 'wordcount', 'description'];

  constructor() {}

  addIndex(){
    let i = 1;
    for (const result of this.searchResultsForResultsTable) {
      result.index = i++;
    }
  }

  ngOnChanges(){
    this.addIndex();
  }

  ngOnInit(): void {}

}
