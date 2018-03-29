import { Injectable } from '@angular/core';

@Injectable()
export class ArticleServiceService {

  private articles=[{id:0,title:"Comment title 1",autor:"Mike",content:"This is my comment",tagList:['diet','suplements','hydration','sportswear','health','events']},
    {id:1,title:"Comment title 2",autor:"Dona",content:"And this is mine",tagList:['diet','suplements','hydration','sportswear','health','events']},
    {id:2,title:"Comment title 3",autor:"Klaudia",content:"Hey, I also posted a comment",tagList:['diet','suplements','hydration','sportswear','health','events']},
  ];

  constructor() { }

  getArticles(){
    return this.articles;
  }

  getArticle(nmb){
const article=this.articles.find(
  (art)=>{
    return art.id===nmb;
  }
)
    return article
  }

}
