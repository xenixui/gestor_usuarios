import { Component, inject, signal } from '@angular/core';
import { IResponse } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  response = signal<IResponse | null>(null);
  userService = inject(UsersService);

  async ngOnInit(){
    try {
      let response: IResponse = await this.userService.getAll();
      this.response.set(response);
    } catch(error) {
      console.log(error);
    }
  }
}
