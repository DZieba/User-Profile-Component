import {Component, OnInit, Input} from '@angular/core';
import {CommentsService} from "../comments.service";
import {Comment} from "../comment.model";
import {UserService} from "../user.service";
import {User} from "../user.model";
import {Subject} from "rxjs";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input('commentedUser')
  private defaultCommentValue = 'Add a comment';
  private commentedUser: User;
  private comments: Comment[] = [];
  private defaultComment: string = 'Add a comment';
  private sampleUser: User;


  constructor(private commentsService: CommentsService,
              private userService: UserService) {
  };


  ngOnInit() {

    this.commentsService.getComments()
      .subscribe( (comments) => {
        this.comments = comments;
        console.log(this.comments);
        this.comments.forEach(comment => {
          comment.test = this.calculateDateDiffrences(new Date(comment.date));
        })
          this.comments.sort(function (a, b) {
            var key1 = new Date(a.date);
            var key2 = new Date(b.date);

            if (key1 < key2) {
              return -1;
            } else if (key1 == key2) {
              return 0;
            } else {
              return 1;
            }
          });
        }

      );

    this.userService.getUsers()
      .subscribe(
        (users) => {
          this.sampleUser = users[Math.floor(Math.random() * 8)];
        })
  }

  onAddComment() {

    let now: Date = new Date();
    this.comments.push(new Comment(this.sampleUser, now, this.defaultComment, this.calculateDateDiffrences(now)));

    this.defaultComment = 'Add a comment';
    this.commentsService.commentsNumberChanged.next(1);
  }

  onEnterPressed(event) {
    if (event.keyCode == 13) {
      this.onAddComment();
    }
  }

  clearDefault() {
    if (this.defaultComment == 'Add a comment') {
      this.defaultComment = '';
    }
  }

  calculateDateDiffrences(date: Date) {
    let now: Date = new Date();
    let timeDiff: number = Math.abs(now.getTime() - date.getTime());
    let diffDays: number = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (diffDays < 1) {
      diffDays = Math.floor(timeDiff / (1000 * 3600));
      if (diffDays < 1) {
        diffDays = Math.floor(timeDiff / (1000 * 60))
        return diffDays + ' m'
      }
      return diffDays + ' h'
    }
    else {
      return diffDays + ' d'
    }

  }




}
