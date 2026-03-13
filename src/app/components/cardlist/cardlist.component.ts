import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-cardlist',
  imports: [CardComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css',
})
export class CardlistComponent {
  arrUsers: IUser[] = [];
  userService = inject(UsersService);

  ngOnIint(){
    
  }
}
