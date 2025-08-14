import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

import { getCaretCoordinates } from './caret-coordinates.util';


@Component({
  selector: 'app-notes-text-box',
  templateUrl: './notes-text-box.component.html',
  styleUrls: ['./notes-text-box.component.css']
})
export class NotesTextBoxComponent {
  noteText: string = '';
  caret = { left: 0, top: 0 };

  @Output() noteAdded = new EventEmitter<string>();
  @Output() textChanged = new EventEmitter<string>();

  // @ViewChild('textarea')
  // textarea!: ElementRef<HTMLTextAreaElement>;


  post() {
    // Emit the noteText value when the Post button is clicked
    this.noteAdded.emit(this.noteText)

    // Optionally, clear the input field after posting
    this.noteText = '';
  }
  

  onTextChange(value: string) {
    console.log(value)
    this.textChanged.emit(value)
  }


  updateCaret(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    if (!textarea || typeof textarea.selectionEnd !== 'number') {
    return;
  }
    const caretPosition = textarea.selectionEnd;
    const coordinates = getCaretCoordinates(textarea, caretPosition);
    this.caret.left = coordinates.left;
    this.caret.top = coordinates.top;


    console.log('Caret Coordinates:', coordinates);
  }

}



