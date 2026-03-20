import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Input } from '@angular/core';
import { IResponse, IUser } from '../interfaces/iuser.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private httpClient = inject(HttpClient);

  private baseUrl: string = "https://peticiones.online/api/users";

  getAll(page: number = 1): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(`${this.baseUrl}?page=${page}`))
  }

  getByID(id:string): Promise<IUser> {
    return lastValueFrom(this.httpClient.get<IUser>(`${this.baseUrl}/${id}`))
  }

  createUser(user: IUser): Promise<IUser> {
    return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, user))
  }

  updateUser(user: IUser): Promise<IUser> {
    return lastValueFrom(this.httpClient.put<IUser>(`${this.baseUrl}/${user._id}`, user))
  }

  


}
