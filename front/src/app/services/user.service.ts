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
    password: ""
  };
  user : User[];

  getUsers() {
    return this.http.get<User[]>(this.URL_API);
  }

  createUser(user: User) {
    return this.http.post(this.URL_API, user);
  }

  updateUser(user: User){
    console.log("llego")
    return this.http.put(`${this.URL_API}/${user._id}`, user);
  }

  deleteUser(_id: string){
    // return this.http.delete(this.URL_API + "/" + _id) son lo mismo
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
