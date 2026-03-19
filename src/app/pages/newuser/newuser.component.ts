import { Component } from '@angular/core';
import { TitlesectionComponent } from "../../shared/titlesection/titlesection.component";
import { RouterLink } from '@angular/router';
import { UserformComponent } from "../../components/userform/userform.component";

@Component({
  selector: 'app-newuser',
  imports: [TitlesectionComponent, RouterLink, UserformComponent],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css',
})
export class NewuserComponent {

}
