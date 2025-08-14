import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './Notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  text = ''
  constructor(private notesService: NotesService) {}

  get notes(): Note[] {
    return this.notesService.notes;
  }

  onAddNote(note: string) {
    this.notesService.addNotes(note);
    this.text = ''; // Clear the text after adding the note
  }

  displayPreview(text: string) {
    this.text = text;
  }

  onDeleteNote(index: number) {
    this.notesService.deleteNote(index);
  }

  onUpdateNote(event: {index: number, newText: string}){
    console.log("TEXTT")
    console.log(event)
    this.notesService.updateNote(event.index, event.newText);
  }

    generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
