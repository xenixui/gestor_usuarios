import { Component, inject, input, signal } from '@angular/core';
import { TitlesectionComponent } from "../../shared/titlesection/titlesection.component";
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { Router, RouterLink } from '@angular/router';
import { ListitemComponent } from "../../components/listitem/listitem.component";
import { HighlightdataComponent } from '../../shared/highlightdata/highlightdata.component';

@Component({
  selector: 'app-user',
  imports: [TitlesectionComponent, RouterLink, ListitemComponent, HighlightdataComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  _id = input<string>();
  userService = inject(UsersService);
  user = signal<IUser | null>(null);
  router = inject(Router);

  async ngOnInit() {
      const id = this._id();
      if(id) {
        try {
          const user = await this.userService.getByID(id);
          if(!user || user._id !== id) {
            this.router.navigate(['**']);
          }
          this.user.set(user);
        } catch(error) {
          this.router.navigate(['**']);
        }
      }
  }
}
