import { Component, computed, inject, input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  imports: [ReactiveFormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  userForm: FormGroup;
  userService = inject(UsersService);
  userToEdit = input<IUser | null>(null);
  isEditing = computed(() => this.userToEdit() !== null);
  router = inject(Router);
  
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
          Validators.pattern(/^https?:\/\/.+$/i),
      ])
    }, [UserformComponent.passwordMatch])
  }

  ngOnChanges() {
    if(this.userToEdit()) {
        this.userForm.patchValue({
        first_name: this.userToEdit()!.first_name,
        last_name: this.userToEdit()!.last_name,
        email: this.userToEdit()!.email,
        username: this.userToEdit()!.username,
        password: this.userToEdit()!.password,
        confirm_password: this.userToEdit()!.password,
        image: this.userToEdit()!.image
    });
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('password')?.addValidators(Validators.required);
    this.userForm.get('password')?.updateValueAndValidity();
    this.userForm.get('confirm_password')?.clearValidators();
    this.userForm.get('confirm_password')?.addValidators(Validators.required);
    this.userForm.get('confirm_password')?.updateValueAndValidity();
    }
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
      return {passwordMisMatch: true};
    }
    return null;
  }

  async onSubmit() {
    let userData: IUser = this.userForm.value;
    try {
      if(this.isEditing()) {
        userData = { ...userData, _id: this.userToEdit()!._id };
        let response = await this.userService.updateUser(userData);
        toast.success(`Datos de usuario actualizados: ${response.first_name} ${response.last_name}`);
        this.router.navigate([`user/${userData._id}`]);
      } else {
        let response = await this.userService.createUser(userData);
        toast.success(`Usuario creado correctamente: ${response.first_name} ${response.last_name}`);
        this.router.navigate(['/home']);
      }
    } catch (data:any) {
      toast.error(data.error.error)
    }
    this.userForm.reset();
  }
}