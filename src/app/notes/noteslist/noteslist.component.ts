import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Note } from '../Notes.model';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent {
  @Input() notes: Note[] = [];
  @Output() noteDeleted = new EventEmitter<number>()
  @Output() noteUpdated = new EventEmitter<{ index: number, editText: string }>(); 
  @Output() editClicked = new EventEmitter<Note>(); 



  
  editingIndex: number | null = null;
  editingNote: Note | null = null;

  deleteNote(index: number) {
    this.noteDeleted.emit(index);
  }

  editNote(index: number) {
    console.log('Editing note:', this.notes[index]);
    this.editingNote = this.notes[index];
    this.editClicked.emit(this.editingNote);
    
  }

  saveEdit(index: number) {
    // this.noteUpdated.emit({index, newText: this.editText});
    // this.editingIndex = null;
    // this.editText = '';
  }

  cancelEdit() {
    // this.editingIndex = null;
    // this.editText = '';
  }


}
