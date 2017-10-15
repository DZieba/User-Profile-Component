import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {UserService} from "./user/user.service";
import {CommentsComponent} from './user/comments/comments.component';
import {CommentsService} from "./user/comments.service";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { DateDifferencePipe } from './user/comments/date-difference.pipe';



const appRoutes: Routes=[
  {path:'', redirectTo: 'user-profile/0',pathMatch: 'full'},
  {path:'user-profile/:id', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CommentsComponent,
    DateDifferencePipe

  ],
  imports: [

    HttpModule,
    BrowserModule,
    AngularSvgIconModule,
   [RouterModule.forRoot(appRoutes)],
    FormsModule

  ],
  providers: [UserService, CommentsService],
  bootstrap: [AppComponent],


})
export class AppModule {
}
