import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode = false;

  title = 'GeminiNotes';
  text = ''

  constructor() {}

  onDarkModeToggle(isDarkMode: boolean) {
    console.log('Dark mode toggled:', isDarkMode);
    this.isDarkMode = isDarkMode;
  }


}
