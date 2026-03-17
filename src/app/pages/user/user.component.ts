import { Component, inject, input, signal } from '@angular/core';
import { TitlesectionComponent } from "../../shared/titlesection/titlesection.component";
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { ListitemComponent } from "../../components/listitem/listitem.component";

@Component({
  selector: 'app-user',
  imports: [TitlesectionComponent, RouterLink, ListitemComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  _id = input<string>();
  userService = inject(UsersService);
  user = signal<IUser | null>(null);

  async ngOnInit() {
    const id = this._id();
    if(id) {
      this.user.set(await this.userService.getByID(id));
    }
  }
}
