import { Component, inject, input, signal } from '@angular/core';
import { TitlesectionComponent } from "../../shared/titlesection/titlesection.component";
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-user',
  imports: [TitlesectionComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  _id = input<string>();
   userService = inject(UsersService);
   user = signal<IUser | null>(null);

  ngOnInit() {
    console.log(this._id());
  }
}
