import { Component, input} from '@angular/core';
import { BadgeComponent } from '../../components/badge/badge.component';

@Component({
  selector: 'app-titlesection',
  imports: [BadgeComponent],
  templateUrl: './titlesection.component.html',
  styleUrl: './titlesection.component.css',
})
export class TitlesectionComponent {
  title = input<string>('');
  subtitle = input<string>('');

}
