import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Comment} from "../comment.model";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment: Comment;
  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit() {
    this.comments = this.commentsService.getComments();
    console.log(this.comments)
  }

}
