import {Injectable} from '@angular/core';
import {Comment} from "./comment.model";
import {UserService} from "./user.service";
import {User} from "./user.model";
import {Subject} from "rxjs";
import {ActivatedRoute, Router, Params} from "@angular/router";


@Injectable()
export class CommentsService {

  sampleAuthor: User = this.userService.getUsers()[1];
  postedDate = new Date(2017, 10, 10);
  commentsChanged=new Subject<Comment[]>();


  private commentsList: Comment[] = [
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: this.postedDate,
      content: 'pierwszyLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date:new Date ,
      content: 'drugiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: this.postedDate,
      content: 'trzeci22222222222222222222222222Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'czwartyLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'piLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'szLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },

  ];


  constructor(private userService: UserService
              ) {}



  getComments() {
    return this.commentsList;
  }

  addComment(comment: Comment) {
    this.commentsList.push(comment);
    this.commentsChanged.next(this.commentsList);


  }


}
