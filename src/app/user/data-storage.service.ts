import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Comment} from "./comment.model";

@Injectable()
export class DataStorageService {

  constructor(private http: Http) { }




  public getAll(){
    this.http.get("./assets/comments.json")
      .subscribe(
        (response:Response)=>{
          const commentsArray:Comment[]=response.json();

        }
      )
  }





}
