import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(public userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
<<<<<<< HEAD
        console.log(res)
        this.userService.user = res;
        console.log(this.userService)
=======
        this.userService.user = res;
>>>>>>> main
      },
      err => console.error(err)
    )
  }
}
