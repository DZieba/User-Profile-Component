import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {UserService} from "./user/user.service";
import {CommentsComponent} from './user/comments/comments.component';
import {CommentsService} from "./user/comments.service";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Routes, RouterModule} from "@angular/router";


const appRoutes: Routes=[

  {path:'user-profile', component: UserProfileComponent,children:[
    {path:':id', component:UserProfileComponent}
  ]},
  {path:'', redirectTo: 'user-profile/1',pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AngularSvgIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, CommentsService],
  bootstrap: [AppComponent],
  exports:[RouterModule]

})
export class AppModule {
}
