import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import { getCaretCoordinates } from './caret-coordinates.util';
import { Note } from '../Notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-text-box',
  templateUrl: './notes-text-box.component.html',
  styleUrls: ['./notes-text-box.component.css'],
})
export class NotesTextBoxComponent implements OnChanges {
  noteText: string = '';

  caret = { left: 0, top: 0 };
  emojis = ['😀', '🎉', '🚀', '🌟', '😎', '🔥', '💡', '🍀', '🥳', '🦄', '💩'];
  colours = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];

  currentColourIndex = 0;
  currentColour = this.colours[0];

  currentEmojiIndex = 0;
  currentEmoji = this.emojis[0];

  gifUrls = [
  'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
  'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'
  // ...add more GIF URLs
  ];
  currentGifIndex = 0;
  currentGif = this.gifUrls[0];
  gifBounce = false
  

  @Output() noteAdded = new EventEmitter<string>();
  @Input() editNote: Note | null = null;
  @Output() noteSaved = new EventEmitter<string>();

  @ViewChild('textarea')
  textarea!: ElementRef<HTMLTextAreaElement>;

  constructor(private notesService: NotesService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.noteText = (this.editNote?.text || '').replace(/\n+$/, '');
    if (changes['editNote']) {
      setTimeout(() => {
        if (this.textarea?.nativeElement) {
          const textareaEl = this.textarea.nativeElement;
          textareaEl.focus();
          // Move caret to the end
          const len = this.noteText.length;
          this.textarea.nativeElement.setSelectionRange(len, len);
          // Update caret position for char count
          this.updateCaret({ target: this.textarea.nativeElement });
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

  updateCaret(event: any) {
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

  onInput(event: any) {
    this.currentEmojiIndex = (this.currentEmojiIndex + 1) % this.emojis.length;
    this.currentEmoji = this.emojis[this.currentEmojiIndex];

    this.currentColourIndex = (this.currentColourIndex + 1) % this.colours.length;
    this.currentColour = this.colours[this.currentColourIndex];

    this.currentGifIndex = (this.currentGifIndex + 1) % this.gifUrls.length;
    this.currentGif = this.gifUrls[this.currentGifIndex];

    this.gifBounce = false;
    setTimeout(() => this.gifBounce = true, 0);


    this.updateCaret(event);
  }

  save() {
    this.noteSaved.emit(this.noteText);
  }

  saveEdit(note: Note) {
    if(note.text == "") return;
    console.log('Saving edit for note:', note);
    this.notesService.updateNote(note.index, this.noteText);
    this.noteText = '';
    this.editNote = null; // Clear the edit mode after saving
  }

  }
