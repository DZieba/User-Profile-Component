import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ArticleServiceService} from "../article-service.service";
import {Observable} from "rxjs";

@Injectable()
export class ArticleResolverService implements Resolve<any> {

  constructor(private artService:ArticleServiceService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
    return this.artService.getArticle(+route.params['id'])
  }


}
