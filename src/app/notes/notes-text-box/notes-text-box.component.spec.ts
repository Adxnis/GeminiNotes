import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTextBoxComponent } from './notes-text-box.component';

describe('NotesTextBoxComponent', () => {
  let component: NotesTextBoxComponent;
  let fixture: ComponentFixture<NotesTextBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesTextBoxComponent]
    });
    fixture = TestBed.createComponent(NotesTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
