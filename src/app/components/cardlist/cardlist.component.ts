import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IResponse, IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-cardlist',
  imports: [CardComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css',
})
export class CardlistComponent {
  arrUsers = signal<IUser[]>([]);
  userService = inject(UsersService);

  async ngOnInit(){
    try {
      let response: IResponse = await this.userService.getAll();
      this.arrUsers.set(response.results);
    } catch(error) {
      console.log(error);
    }
  }
}
