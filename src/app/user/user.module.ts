import {NgModule} from '@angular/core'




import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CommentsComponent} from "./comments/comments.component";
import {DateDifferencePipe} from "./comments/date-difference.pipe";
import {HttpModule} from "@angular/http";


const UserRoutes: Routes=[
  {path:'', redirectTo: 'user-profile/0',pathMatch: 'full'},
  {path:'user-profile/:id', component: UserProfileComponent}
];





@NgModule({
  declarations: [
    UserProfileComponent,
    CommentsComponent,
    DateDifferencePipe
  ],

  imports: [

    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],




})

export class UserModule{

}
