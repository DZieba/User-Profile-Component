import {Injectable} from '@angular/core';
import {Comment} from "./comment.model";
import {Subject} from "rxjs";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from "@angular/http";


@Injectable()
export class CommentsService {
  commentsNumberChanged = new Subject<number>();

  constructor(private http: Http) {
  }


  public getComments(): Observable<Comment[]> {
    return this.http.get("./assets/comments.json")
      .map((response) => response.json())
  }

  public addComment(newComment, chosenArray) {
    chosenArray.push(newComment);
    this.commentsNumberChanged.next(1);
  }




}



