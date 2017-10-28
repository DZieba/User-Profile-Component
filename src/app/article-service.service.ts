import { Injectable } from '@angular/core';

@Injectable()
export class ArticleServiceService {

  private articles=[{id:0,title:"What to do 1",autor:"mike",content:"I'm stupid",tagList:['diet','suplements','hydration','sportswear','health','events']},
    {id:1,title:"What to do 2",autor:"dona",content:"I'm great",tagList:['diet','suplements','hydration','sportswear','health','events']},
    {id:2,title:"What to do 3",autor:"kladzia",content:"I'm weird",tagList:['diet','suplements','hydration','sportswear','health','events']},
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
