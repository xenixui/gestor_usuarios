import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardlistComponent} from '../../components/cardlist/cardlist.component';
import { HerosectionComponent } from '../../shared/herosection/herosection.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardlistComponent, HerosectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
