import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserService} from "./user/user.service";
import {CommentsService} from "./user/comments.service";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./user/data-storage.service";
import {UserModule} from "./user/user.module";


const appRoutes: Routes = [
  {path: '', loadChildren: './user/user.module#UserModule'},
  {path: 'user-profile/:id', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [

    HttpModule,
    BrowserModule,
    AngularSvgIconModule,
    [RouterModule.forRoot(appRoutes)],
    FormsModule,
    UserModule


  ],
  providers: [UserService, CommentsService, DataStorageService],
  bootstrap: [AppComponent],


})
export class AppModule {
}
