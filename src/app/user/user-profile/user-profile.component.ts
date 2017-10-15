import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {Comment} from "../comment.model";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {CommentsService} from "../comments.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],

})
export class UserProfileComponent implements OnInit {
  users: User[] = [];
  user: User;
  currentRoute: any;
  currentId: number;
  sub: Subscription;
  sub1:Subscription;
  @ViewChild('myModal') el: ElementRef;
  htmlToAdd = '';
  isLiked = false;
  commentOption: string = 'hide comments';
  commentsToDisplay = true;

  followState: string = 'follow';

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
  private commentsService:CommentsService) {
  }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe(
        (params: Params) => {
          this.currentId = params['id'];
          console.log(this.currentId)
        });


    this.userService.getUsers()
      .subscribe(
        (users) => {
          this.users = users;
          this.user = this.users[this.currentId];
        }
      );
    console.log(JSON.stringify(this.users));
    ;

    this.sub1=this.commentsService.commentsNumberChanged
      .subscribe(
        (number)=>{
          this.user.comments+=number;
        }
      )
  }

  toggleLike() {
    if (!this.isLiked) {
      this.user.likes++;
    }
    else {
      this.user.likes--;

    }
    this.isLiked = !this.isLiked
  }

  shareWebsite() {
    this.currentRoute = this.router.url;
    this.el.nativeElement.style.display = 'block';
    this.htmlToAdd = '<h4>Current website url is:<br><br> ' + window.location.origin + this.currentRoute + '</h4>'


  }

  followUser(state: string) {
    if (state == 'follow') {
      this.user.followers++;
      this.followState = 'unfollow'
    }
    else {
      this.user.followers--;
      this.followState = 'follow'
    }
  }

  closeModal() {
    this.el.nativeElement.style.display = 'none';
  }

  ToggleComments() {
    if (this.commentsToDisplay) {
      this.commentOption = 'show comments';
    }
    else {
      this.commentOption = 'hide comments';
    }


    this.commentsToDisplay = !this.commentsToDisplay;


  }
}
