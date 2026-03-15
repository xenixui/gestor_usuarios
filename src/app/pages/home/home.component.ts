import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardlistComponent} from '../../components/cardlist/cardlist.component';
import { HerosectionComponent } from '../../shared/herosection/herosection.component';
import { TitlesectionComponent } from '../../shared/titlesection/titlesection.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardlistComponent, HerosectionComponent, TitlesectionComponent, PaginatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
