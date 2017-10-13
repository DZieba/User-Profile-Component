import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {UserService} from "./user/user.service";
import {CommentsComponent} from './user/comments/comments.component';
import {CommentsService} from "./user/comments.service";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Routes, RouterModule} from "@angular/router";
import {Autosize} from 'ng-autosize';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


const appRoutes: Routes=[

  {path:'user-profile', component: UserProfileComponent,children:[
    {path:':id', component:UserProfileComponent}
  ]},
  {path:'', redirectTo: 'user-profile/id',pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CommentsComponent,
    Autosize
  ],
  imports: [

    HttpModule,
    BrowserModule,
    AngularSvgIconModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [UserService, CommentsService],
  bootstrap: [AppComponent],


})
export class AppModule {
}
