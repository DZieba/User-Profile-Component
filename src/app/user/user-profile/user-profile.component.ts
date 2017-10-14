import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
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
  user: User;
  comments: Comment[] = [];
  currentRoute:any;
  currentId:number;
sub:Subscription;
  @ViewChild('myModal') el:ElementRef;
  htmlToAdd='';


  constructor(private userService: UserService,
  private router:Router,
  private route:ActivatedRoute
 ) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe(
        (params:Params) => {
    this.currentId=params['id'];
console.log(this.currentId)
  });




    this.users = this.userService.getUsers();
    this.user = this.users[this.currentId];


  }

  likeComment(){
   this.user.likes++;
   console.log(this.user.likes)
  }

shareWebsite() {
  this.currentRoute=this.router.url;
  this.el.nativeElement.style.display='block';
  this.htmlToAdd= '<h2>Current website url is: '+window.location.origin+this.currentRoute+ '</h2>'



}
followUser(){
    this.user.followers++;
}

  closeModal(){
    this.el.nativeElement.style.display='none';
  }


}
