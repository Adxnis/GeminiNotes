import { Component, Input } from '@angular/core';
import { Note } from '../Notes.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note: Note = {
    id: '', text: '', createdAt: new Date(),
    index: 0
  };
}
