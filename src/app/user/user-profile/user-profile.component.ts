import {Component, OnInit} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {Comment} from "../comment.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],

})
export class UserProfileComponent implements OnInit {

  users: User[] = [];
  name = '';
  user: User;
  comments: Comment[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
    this.name = this.users[1].name;
    this.user = this.users[1];
  }
  doClick(){
    alert('klikłooooooooooooooo');
  }

}
