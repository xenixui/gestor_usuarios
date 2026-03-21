import { Component } from '@angular/core';
import { CardlistComponent} from '../../components/cardlist/cardlist.component';
import { HerosectionComponent } from '../../shared/herosection/herosection.component';
import { TitlesectionComponent } from '../../shared/titlesection/titlesection.component';
import { HighlightdataComponent } from '../../shared/highlightdata/highlightdata.component';

@Component({
  selector: 'app-home',
  imports: [CardlistComponent, HerosectionComponent, TitlesectionComponent, HighlightdataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
