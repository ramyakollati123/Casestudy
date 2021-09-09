import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`localhost:4200/users`);
  }

  getById(id: number) {
    return this.http.get<User>(`localhost:4200/users/${id}`);
  }
}
