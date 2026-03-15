import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive  } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IResponse } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-paginator',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  response = signal<IResponse | null>(null);
  pages = signal<number[]>([]);
  userService = inject(UsersService);

  async ngOnInit(){
    try {
      let response: IResponse = await this.userService.getAll();
      this.response.set(response);
      this.pages.set(Array.from({ length: response.total_pages }, (_, i) => i + 1));
    } catch(error) {
      console.log(error);
    }
  }
}
