import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  isDarkMode: boolean = false;

  @Output() darkModeToggle = new EventEmitter<boolean>();

  ngOnInit() {
    // Emit initial value if needed
    this.darkModeToggle.emit(this.isDarkMode);
  }

  toggleDarkMode() {
    this.darkModeToggle.emit(this.isDarkMode);
  }
}
