import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../categories.service";
import {ArticleServiceService} from "../article-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
categories=[];
currentTag;
articles=[];
  constructor(private ctgService:CategoriesService,
  private artService:ArticleServiceService) { }

  ngOnInit() {
    this.articles=this.artService.getArticles();
    this.categories=this.ctgService.getCategories();
    console.log(this.categories);
  }


  changeCat(cat){
    this.currentTag='#'+cat;
  }


}
