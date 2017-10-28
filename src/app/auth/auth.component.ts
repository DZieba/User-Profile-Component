import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {UserProfileComponent} from "../user/user-profile/user-profile.component";
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  title:string='';
authType;
authForm:FormGroup;

  constructor(private route:ActivatedRoute,
              private usersService:UserService,
  private fb:FormBuilder) {
    this.authForm=this.fb.group(
      {
        'email':['',Validators.required],
        'password':['',Validators.required]
      }
    )
  }

  ngOnInit() {
    this.route.url
      .subscribe(
        (data)=>{
          this.authType=data[0].path;
this.title=this.authType=='login'? 'Sign in' :'Sign up';
if(this.authType=='register'){
  this.authForm.addControl('username',new FormControl());
}
        }
      )
  }
  submitForm(){
this.usersService.addUser('dominika');
this.usersService.getUsers().subscribe(
  (users)=>{
    console.log(users)
  }
)
  }

}
