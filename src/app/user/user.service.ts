import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable()
export class UserService {

  private usersList: User[] = [
    { image: '../../assets/harvey.jpg',name:'Harvey Spectre', city: 'New York', country: 'USA', likes:100, following:333, followers:444,comments:123},
    { image: '../../assets/harvey.jpg',name:'Harvey Specter', city: 'New York', country: 'USA', likes:0, following:333, followers:444,comments:123},
    { image: '../../assets/harvey.jpg',name:'Sandra Almond', city: 'Queensland', country: 'Australia', likes:0, following:333, followers:444,comments:123},
    { image: '../../assets/shoe1.jpg',name:'Alice Bevery', city: 'Wiesbaden', country: 'Germany', likes:0, following:333, followers:444,comments:123},
    { image: '../../assets/shoe1.jpg',name:'Morgan Freeman', city: 'Shoe blue', country: 'Poland', likes:0, following:333, followers:444,comments:123},
    { image: '../../assets/shoe1.jpg',name:'Kate Winslet', city: 'Shoe blue', country: 'Poland', likes:0, following:333, followers:444,comments:123},
    { image: '../../assets/shoe1.jpg',name:'Don Juan', city: 'Shoe blue', country: 'Poland', likes:0, following:333, followers:444,comments:123},
    { image: '../../assets/shoe1.jpg',name:'Grana Padano', city: 'Shoe blue', country: 'Poland', likes:0, following:333, followers:444,comments:123},
  ];


  constructor() {

  }


  getUsers() {
    return this.usersList;
  }


}
