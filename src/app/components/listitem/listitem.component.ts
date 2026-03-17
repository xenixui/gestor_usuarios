import { Component, inject, input, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-listitem',
  imports: [],
  templateUrl: './listitem.component.html',
  styleUrl: './listitem.component.css',
})
export class ListitemComponent {
  userService = inject(UsersService);
  user = signal<IUser | null>(null);
  _id = input<string>();
  icon = input<string>();
  label = input<string>('');
  value = input<string>('');

  async ngOnInit() {
    const id = this._id();
    console.log('id recibido:', id);
    if(id) {
      this.user.set(await this.userService.getByID(id));
    }
  }
}
