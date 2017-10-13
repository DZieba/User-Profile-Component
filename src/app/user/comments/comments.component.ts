import {Component, OnInit} from '@angular/core';
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
   myTime = new Date().getTime() - new Date("2017-02-20T12:01:04.753Z").getTime();
   myseconds=this.myTime/1000;
  comment: Comment;
  comments: Comment[] = [];

  myComment:string='Add a comment';
  sampleUser:User;
subscription:Subscription;
  constructor(private commentsService: CommentsService,
  private userService:UserService) {
  }

  ngOnInit() {
    this.sampleUser=this.userService.getUsers()[2];
    this.comments = this.commentsService.getComments();
    this.subscription=this.commentsService.commentsChanged
      .subscribe(
        (comments:Comment[])=>{
          this.comments=comments;
        }
      )

  }

  onAddComment(){
    this.comment={image:this.sampleUser.image,author:this.sampleUser.name,date:new Date,content:this.myComment}
    console.log(this.comment)
    this.commentsService.addComment(this.comment);
    this.myComment='';
  }
  keyDown(event){
    if(event.keyCode==13){
      this.onAddComment();
    }
  }

  clearDefault(){
    if(this.myComment=='Add a comment'){
      this.myComment='';
    }
  }


}
