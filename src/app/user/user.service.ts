import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get("./assets/users.json")
      .map((response) => response.json());
  }

}
