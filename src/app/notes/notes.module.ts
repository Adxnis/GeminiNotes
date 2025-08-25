import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { NotesTextBoxComponent } from './notes-text-box/notes-text-box.component';
import { NotesComponent } from './notes.component';
import { FormsModule } from '@angular/forms';
import { NotesRoutingModule } from './notes-routing.module';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';







@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NoteslistComponent,
    NotesTextBoxComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
],
  exports: [
    NotesComponent,
    NoteComponent,
    NoteslistComponent,
    NotesTextBoxComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]

})
export class NotesModule { }
