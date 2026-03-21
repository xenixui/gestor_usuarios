import { Component, inject, input, signal } from '@angular/core';
import { TitlesectionComponent } from "../../shared/titlesection/titlesection.component";
import { RouterLink } from '@angular/router';
import { UserformComponent } from "../../components/userform/userform.component";
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-updateuser',
  imports: [UserformComponent, RouterLink, TitlesectionComponent],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css',
})
export class UpdateuserComponent {
  userService = inject(UsersService);
  user = signal<IUser | null>(null);
  _id = input<string>();

  async ngOnInit() {
    const id = this._id();
    if(id) {
      this.user.set(await this.userService.getByID(id));
    }
  }
}
