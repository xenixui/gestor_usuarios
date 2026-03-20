import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-userform',
  imports: [ReactiveFormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  userForm: FormGroup;
  userService = inject(UsersService);
  
  constructor() {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      last_name: new FormControl("", [
         Validators.required,
         Validators.minLength(3),
      ]),
      email: new FormControl("", [
         Validators.required,
         Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      username: new FormControl("", [
         Validators.required,
         Validators.minLength(6),
      ]),
      password: new FormControl("", [
         Validators.required,
         Validators.minLength(8),
         Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/),
      ]),
      confirm_password: new FormControl("", [
         Validators.required,
      ]),
      image: new FormControl("", [
         Validators.required,
         Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i),
      ])
    }, [UserformComponent.passwordMatch])
  }

  checkError(controlName: string, errorname: string) {
    return this.userForm.get(controlName)?.hasError(errorname);
  }

  checkTouched(controlName: string) {
    return this.userForm.get(controlName)?.touched;
  }

  static passwordMatch(control: AbstractControl): ValidationErrors | null  {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
    if (password != confirmPassword) {
      return {passwordMissMatch: true};
    }
    return null;
  }

  async onSubmit() {
    let userData: IUser = this.userForm.value;
    try {
      let response = await this.userService.createUser(userData);
      toast.success(`Usuario creado correctamente: ${response.first_name} ${response.last_name}`);
    } catch (data:any) {
      toast.error(data.error.error)
    }
    this.userForm.reset();
  }
}