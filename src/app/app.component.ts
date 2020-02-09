import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-actions-test-app';
  data: number;

  onEnter() {
    console.log('onEnter():', this.data);
  }

  onChange() {
    console.log('onChange(): ', this.data);
  }

  onInputFocus() {
    console.log('focus!');
  }

  onInputBlur() {
    console.log('blur!');
  }
}
