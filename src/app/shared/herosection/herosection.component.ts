import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-herosection',
  imports: [RouterLink],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
