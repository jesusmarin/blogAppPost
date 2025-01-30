import { ArticleComponent } from './../../articles/article/article.component';
import { Article } from './../../../model/article.model';
import { Component, inject } from '@angular/core';
import { ArticleService } from '../../articles/service/article-service.service';


@Component({
  selector: 'app-articles',
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  page: string = 'Page Articulos';
  articlesList: Article[] = [];
  articleService: ArticleService = inject(ArticleService);

  constructor() {
    this.articlesList = this.articleService.getArticlesList();
    }

}
