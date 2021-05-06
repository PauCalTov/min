import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { NgForm } from "@angular/forms";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        console.log(res)
        this.userService.user = res;
        console.log(this.userService)
      },
      err => console.error(err)
    );
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.userService.updateUser(form.value).subscribe(
        res => {
          this.getUsers();
          form.reset();
        },
        err => console.log(err)
      );
    }
    else {
      this.userService.createUser(form.value).subscribe(
        res => {
          this.getUsers();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  editUser(user: User) {
    this.userService.form_user = user;
    this.getUsers();
  }

  deleteUser(id: string) {
    if (confirm("Seguro que lo quieres borrar?")) {
      this.userService.deleteUser(id).subscribe(
        res => {
          console.log(res)
          this.getUsers();
        },
        err => console.error(err)
      );
    }
  }
}
