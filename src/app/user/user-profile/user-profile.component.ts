import {Component, OnInit} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {Comment} from "../comment.model";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Subscription} from "rxjs";

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
  currentRoute:any;
  currentId;
sub:Subscription;

  constructor(private userService: UserService,
  private router:Router,
  private route:ActivatedRoute
 ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    console.log( +params['id']);

  });




    this.users = this.userService.getUsers();
    console.log(this.users);
    this.name = this.users[1].name;
    this.user = this.users[1];
  }

  likeComment(){
   this.user.likes++;
   console.log(this.user.likes)
  }

shareWebsite() {
  console.log(this.currentId);



    this.currentRoute=this.router.url;
    console.log(window.location.origin+this.currentRoute);
}
}
