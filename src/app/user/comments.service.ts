import {Injectable} from '@angular/core';
import {Comment} from "./comment.model";
import {UserService} from "./user.service";
import {User} from "./user.model";


@Injectable()
export class CommentsService {

  sampleAuthor: User = this.userService.getUsers()[1];
  postedDate = new Date(2017, 1, 1);

  private commentsList: Comment[] = [
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: this.postedDate,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      image: '../../assets/harvey.jpg',
      author: this.sampleAuthor.name,
      date: new Date,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },

  ];


  constructor(private userService: UserService) {

  }


  getComments() {
    return this.commentsList;
  }

  addComment(comment: Comment) {
    this.commentsList.push(comment);
  }

}
