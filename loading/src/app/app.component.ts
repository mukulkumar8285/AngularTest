import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormComponent ],
  template: `
  <h1>{{ title }}</h1>
  <button (click)="changeTitle()">Change Title</button>
  <app-form [title]="title"></app-form>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Initial Title';

  changeTitle(): void {
    this.title = this.title === 'Initial Title' ? 'Updated Title' : 'Initial Title';
  }
}
