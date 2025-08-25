import { Injectable } from '@angular/core';
import { Note } from './Notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  notes: Note[] = [];

  // This service can be expanded to include methods for interacting with a backend or local storage
  // For example, methods to fetch notes, save notes, delete notes, etc.
  // Currently, it is a placeholder for future functionality.

  addNotes(note: string) {
    if (note.trim().length === 0) return // Prevent adding empty notes
    // Optionally, you can add a timestamp or ID to the note

    
    const newNote: Note = {
      id: this.generateId(), // Using ISO string as a simple unique ID
      text: note,
      createdAt: new Date(), // Set the creation date
      index: this.notes.length 
    };

    console.log(newNote)  
    // Add the note to the notes array
    this.notes.push(newNote);
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }

  updateNote(index: number, newText: string) {
    // this.notes[event.index].text = event.newText;
    const idx = this.notes.findIndex(n => n.index === index);
    if(idx !== -1) {
      this.notes[idx] = { 
        ...this.notes[idx], 
        text: newText, 
        updatedAt: new Date() 
      };
      // this.notes.splice(idx, 1);
      // this.notes.unshift(updatedNote);
    }

    this.notes.forEach(note => {
  console.log(note);
});


  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
