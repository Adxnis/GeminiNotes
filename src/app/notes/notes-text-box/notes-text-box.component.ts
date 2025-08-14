import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes-text-box',
  templateUrl: './notes-text-box.component.html',
  styleUrls: ['./notes-text-box.component.css']
})
export class NotesTextBoxComponent {
  noteText: string = '';
  caretLeft = 0;
  caretTop = 0;

  @Output() noteAdded = new EventEmitter<string>();
  @Output() textChanged = new EventEmitter<string>();

  @ViewChild('textarea')
  textarea!: ElementRef<HTMLTextAreaElement>;

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



}
