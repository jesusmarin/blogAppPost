import { Component, inject } from '@angular/core';
import { Article } from '../../../model/article.model';
import { ArticleService } from '../service/article-service.service';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent  {
  page: string="Object Articulos";
  article: Article = {
            id:0,
            titulo: 'string',
            fecha_publicacion: 'string',
            autor: 'string',
            contenido: {
              subtitulos: {
                texto: 'string',
              }
            }
          }
  articlesList: Article[] = [];
  articleService: ArticleService = inject(ArticleService);

  constructor() {
      this.articlesList = this.articleService.getArticlesList();
  }


}
