import { Note } from './note';
import { SearchResponse } from './search-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  REST_ENDPOINT: string = 'http://localhost:8080/api/v1/lab-notes';

  constructor(private http: HttpClient) { }

  getSearchResults(searchStr: string) {
    return this.http.get<SearchResponse>(this.REST_ENDPOINT + '/search?q=' + searchStr);
  }

  getNotes() {
    return this.http.get<Note[]>(this.REST_ENDPOINT);
  }

  saveNotes(notes: Note) {
    return this.http.post<Note>(this.REST_ENDPOINT, notes);
  }
}
