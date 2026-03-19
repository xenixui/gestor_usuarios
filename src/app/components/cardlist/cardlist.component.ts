import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IResponse, IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { PaginatorComponent } from "../paginator/paginator.component";
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-cardlist',
  imports: [CardComponent, PaginatorComponent],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css',
})
export class CardlistComponent {
  arrUsers = signal<IUser[]>([]);
  userService = inject(UsersService);

  async ngOnInit(){
    await this.loadPage(1)
  }

   async loadPage(page: number) {
    try {
      let response: IResponse = await this.userService.getAll(page);
      this.arrUsers.set(response.results);
    } catch(data: any) {
      toast(data.error.error);
    }
  }
}
