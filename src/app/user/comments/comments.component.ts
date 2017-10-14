import {Component, OnInit, Input} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Comment} from "../comment.model";
import {UserService} from "../user.service";
import {User} from "../user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
@Input('commentedUser') commentedUser:User;

  comment: Comment;
  comments: Comment[] = [];
  defaultComment: string = 'Add a comment';
  sampleUser: User;
  subscription: Subscription;
  constructor(private commentsService: CommentsService,
  private userService:UserService) {};
randomUser;

  ngOnInit() {

    this.comments = this.commentsService.getComments();
    this.comments.sort(function (a, b) {
      var key1 = new Date(a.date);
      var key2 = new Date(b.date);

      if (key1 < key2) {
        return 1;
      } else if (key1 == key2) {
        return 0;
      } else {
        return -1;
      }
    });


    this.subscription = this.commentsService.commentsChanged
      .subscribe(
        (comments: Comment[]) => {
          this.comments = comments;
        }
      )
  }

  onAddComment(){
    this.randomUser=Math.floor(Math.random()*8);
    this.sampleUser = this.userService.getUsers()[this.randomUser];
    this.comment={image:this.sampleUser.image,author:this.sampleUser.name,date:new Date,content:this.defaultComment}
    this.commentsService.addComment(this.comment);
    this.defaultComment='Add a comment';
    console.log(this.commentedUser.comments++);
  }
  keyDown(event){
    if(event.keyCode==13){
      this.onAddComment();
    }
  }

  clearDefault(){
    if(this.defaultComment=='Add a comment'){
      this.defaultComment='';
    }
  }


}
