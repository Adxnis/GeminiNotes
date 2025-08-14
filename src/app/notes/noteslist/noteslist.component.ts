import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../Notes.model';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent {
  @Input() notes: Note[] = [];
  @Output() noteDeleted = new EventEmitter<number>()
  @Output() noteUpdated = new EventEmitter<{ index: number, newText: string }>(); 
  
  editingIndex: number | null = null;
  editText: string = ''

  deleteNote(index: number) {
    this.noteDeleted.emit(index);
  }

  editNote(index: number) {
    this.editingIndex = index;
    this.editText = this.notes[index].text;
    console.log(this.editingIndex);
  }

  saveEdit(index: number) {
    this.noteUpdated.emit({index, newText: this.editText});
    this.editingIndex = null;
    this.editText = '';
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editText = '';
  }
}
