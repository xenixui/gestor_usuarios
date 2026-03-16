import { Component } from '@angular/core';
import { CardlistComponent} from '../../components/cardlist/cardlist.component';
import { HerosectionComponent } from '../../shared/herosection/herosection.component';
import { TitlesectionComponent } from '../../shared/titlesection/titlesection.component';

@Component({
  selector: 'app-home',
  imports: [CardlistComponent, HerosectionComponent, TitlesectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
