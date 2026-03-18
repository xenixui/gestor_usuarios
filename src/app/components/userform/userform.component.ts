import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-userform',
  imports: [ReactiveFormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  userForm: FormGroup

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
      ]),
      username: new FormControl("", [
         Validators.required,
         Validators.minLength(6),
      ]),
      password: new FormControl("", [
         Validators.required,
      ]),
      confirm_password: new FormControl("", [
         Validators.required,
      ]),
      image: new FormControl("", [
         Validators.required,
      ])
    }, [])
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}