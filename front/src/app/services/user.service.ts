import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  URL_API = "http://localhost:4000/api/users"

  user : User[];

  getUsers() {
    return this.http.get<User[]>(this.URL_API);
  }
}
