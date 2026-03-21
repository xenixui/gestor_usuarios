import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { UsersService } from './services/users.service';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgxSonnerToaster, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestor_usuarios');
  usersService = inject(UsersService);
  router = inject(Router);

  async onDelete() {
    const user = this.usersService.userToDelete();
    if(user) {
      try {
        let response = await this.usersService.deleteUser(user);
        toast.success(`Usuario eliminado: ${response.first_name} ${response.last_name}`);
        this.router.navigate(['/home']);
      } catch(data: any) {
        toast.error(data.error.error);
      }
    }
  }
}
