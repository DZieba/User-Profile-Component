import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserService} from "./user/user.service";
import {CommentsService} from "./user/comments.service";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./user/data-storage.service";
import {UserModule} from "./user/user.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import {CategoriesService} from "./categories.service";
import { ArticlePreviewComponent } from './article/article-preview/article-preview.component';
import { ArticleMetaComponent } from './article/article-meta/article-meta.component';
import { ArticleWholeComponent } from './article/article-whole/article-whole.component';
import {ArticleServiceService} from "./article-service.service";
import {ArticleResolverService} from "./article/article-resolver.service";




const appRoutes: Routes = [
  {path: '', loadChildren: './user/user.module#UserModule'},
  {path: 'user-profile/:id', loadChildren: './user/user.module#UserModule'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AuthComponent},
  {path: 'register', component: AuthComponent},
  {path: 'article/:id', component: ArticleWholeComponent, resolve:{art:ArticleResolverService}},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    ArticleWholeComponent



  ],
  imports: [

    HttpModule,
    BrowserModule,
    AngularSvgIconModule,
    [RouterModule.forRoot(appRoutes)],
    FormsModule,
    UserModule,
    ReactiveFormsModule


  ],
  providers: [UserService, CommentsService, DataStorageService, CategoriesService,ArticleServiceService,ArticleResolverService],
  bootstrap: [AppComponent],


})
export class AppModule {
}
