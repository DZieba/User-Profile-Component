import {User} from "./user.model";
export class Comment {
  constructor(  public author: User,
  public date: Date,
  public content: string, public test: string){

  }


}
