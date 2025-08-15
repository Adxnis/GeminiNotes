import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';

import { getCaretCoordinates } from './caret-coordinates.util';
import { Note } from '../Notes.model';

@Component({
  selector: 'app-notes-text-box',
  templateUrl: './notes-text-box.component.html',
  styleUrls: ['./notes-text-box.component.css'],
})
export class NotesTextBoxComponent {
  noteText: string = '';
  caret = { left: 0, top: 0 };
  emojis = ['😀', '🎉', '🚀', '🌟', '😎', '🔥', '💡', '🍀', '🥳', '🦄', '💩'];
  colours = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
  currentColourIndex = 0;
  currentColour = this.colours[0];

  currentEmojiIndex = 0;
  currentEmoji = this.emojis[0];

  @Output() noteAdded = new EventEmitter<string>();
  @Output() textChanged = new EventEmitter<string>();
  @Input() editNote: Note | null = null;
  @Output() noteSaved = new EventEmitter<string>();

  @ViewChild('textarea')
  textarea!: ElementRef<HTMLTextAreaElement>;

  ngOnChanges(changes: SimpleChanges) {
    this.noteText = (this.editNote?.text || '').replace(/\n+$/, '');
    if (changes['editNote']) {
      setTimeout(() => {
        if (this.textarea?.nativeElement) {
          const textareaEl = this.textarea.nativeElement;
          textareaEl.focus();
          // Move caret to the end
          textareaEl.setSelectionRange(
            this.noteText.length,
            this.noteText.length
          );
        }
      });
    }

    console.log(this.editNote);
  }
  post() {
    // Emit the noteText value when the Post button is clicked
    this.noteAdded.emit(this.noteText);

    // Optionally, clear the input field after posting
    this.noteText = '';
  }

  onTextChange(value: string) {
    console.log(value);
    this.textChanged.emit(value);
  }

  updateCaret(event: Event) {
    this.currentEmojiIndex = (this.currentEmojiIndex + 1) % this.emojis.length;
    this.currentEmoji = this.emojis[this.currentEmojiIndex];

    this.currentColourIndex =
      (this.currentColourIndex + 1) % this.colours.length;
    this.currentColour = this.colours[this.currentColourIndex];
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

  save() {
    this.noteSaved.emit(this.noteText);
  }
}
