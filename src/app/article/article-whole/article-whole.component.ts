import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {ArticleServiceService} from "../../article-service.service";

@Component({
  selector: 'app-article-whole',
  templateUrl: './article-whole.component.html',
  styleUrls: ['./article-whole.component.css']
})
export class ArticleWholeComponent implements OnInit {
article:any;
  constructor(private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data:Data)=>{
this.article=data['art'];

        }
      )

  }

}
