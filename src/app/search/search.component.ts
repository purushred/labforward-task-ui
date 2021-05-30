import { NotesService } from '../notes.service';
import { SearchResponse } from './../search-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: SearchResponse = {
    occurrences: 0,
    similarWords: []
  };

  searchStr: string;

  resultsPanel: boolean =  false;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.notesService.getSearchResults(this.searchStr).subscribe((response) => {
      if (response) {
        this.searchResult = response;
        this.resultsPanel = true;
      } else {
        console.log('No data for available.');
      }
    }, (error) => {
      console.error('Failed to retrieve data from server.', error);
    });
  }
}
