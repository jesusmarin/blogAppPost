
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { Article } from '../../../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [
    {
      "id": 1,
      "titulo": "Mi primer artículo",
      "fecha_publicacion": "2023-11-23",
      "autor": "Juan Pérez",
      "contenido": {
        "subtitulos": [
          {
            "texto": "Introducción",
            "parrafos": [
              {
                "textos": [
                  {
                    "contenido": "<p>Este es el primer párrafo del artículo. <strong>¡Hola mundo!</strong></p>"
                  }
                ],
                "imagenes": [
                  {
                    "src": "assets/images/jesus_9.jpg",
                    "alt": "Imagen descriptiva"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": 2,
      "titulo": "Mi segundo artículo",
      "fecha_publicacion": "202a-12-23",
      "autor": "Juan Pérez",
      "contenido": {
        "subtitulos": [
          {
            "texto": "El book",
            "parrafos": [
              {
                "textos": [
                  {
                    "contenido": "<p>Este es el primer párrafo del book. <strong>¡Hola mundo book!</strong></p>"
                  }
                ],
                "imagenes": [
                  {
                    "src": "assets/images/jesus_2.jpg",
                    "alt": "Imagen descriptiva"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]; //



  constructor() {}
  /*getBackArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('assets/json/articles.json');//
  }*/


  getArticlesList(): Article[] {
    return this.articles;
  }
  getArticleById(id:number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }
}
