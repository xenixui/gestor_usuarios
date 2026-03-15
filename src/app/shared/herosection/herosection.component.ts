import { Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-herosection',
  imports: [RouterLink],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
