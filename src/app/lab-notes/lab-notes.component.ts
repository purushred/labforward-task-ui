import { NotesService } from './../notes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from '../note';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lab-notes',
  templateUrl: './lab-notes.component.html',
  styleUrls: ['./lab-notes.component.css']
})
export class LabNotesComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  newNote: Note = new Note();
  notes: Note[];
  displayedColumns: string[] = ['time', 'data'];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((response) => {
      this.notes = response;
    }, (error) => {
      console.error('Failed to retrieve data to server.', error);
    });
  }

  onSave() {
    this.notesService.saveNotes(this.newNote).subscribe((response) => {
      this.notes.push(response);
      this.table.renderRows();
      console.log("Saved successful.", response);
    }, (error) => {
      console.error('Failed to save data to server.', error);
    });
  }
}
