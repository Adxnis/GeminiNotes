import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './Notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  editNote: Note | null = null;
  
  constructor(private notesService: NotesService) {}

  get notes(): Note[] {
    return this.notesService.notes;
  }


  onAddNote(note: string) {
    this.notesService.addNotes(note);
  }



  onDeleteNote(index: number) {
    this.notesService.deleteNote(index);
  }

  onUpdateNote(event: {index: number, editText: string}){
    console.log("TEXTT")
    console.log(event)
    this.notesService.updateNote(event.index, event.editText);
  }

    generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  onEditNote(note: Note) {
    this.editNote = note;
  }
}
