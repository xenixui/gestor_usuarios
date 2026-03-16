import { Component, inject, input, output, signal } from '@angular/core';
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
  pageChanged = output<number>();
  currentPage = signal<number>(1);
  totalPages = signal<number>(1);
  pages = signal<number[]>([]);
  userService = inject(UsersService);

  async ngOnInit(){
    try {
      let response: IResponse = await this.userService.getAll();
      this.totalPages.set(response.total_pages);
      this.pages.set(Array.from({ length: response.total_pages }, (_, i) => i + 1));
    } catch(error) {
      console.log(error);
    }
  }

  goToNext() {
    const next = this.currentPage() + 1;
    this.currentPage.set(next);
    this.pageChanged.emit(next);
  }

  goToPrev() {
    const prev = this.currentPage() - 1;
    this.currentPage.set(prev);
    this.pageChanged.emit(prev);
  }
}
