import { Component, input } from '@angular/core';

@Component({
  selector: 'app-highlightdata',
  imports: [],
  templateUrl: './highlightdata.component.html',
  styleUrl: './highlightdata.component.css',
})
export class HighlightdataComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
