import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {

  constructor(private _http: HttpClient) { }

  fetchResults(keyword: string): Observable<object> {
    return this._http.get<object>('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=' + keyword);
  }
}
