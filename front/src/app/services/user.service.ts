import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  URL_API = "http://localhost:4000/api/users"

  form_user: User = {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    createdAt: "",
    updatedAt: "",
    _id: ""
  };
  user : User[];

  getUsers() {
    return this.http.get<User[]>(this.URL_API);
  }
}
