import { Routes } from '@angular/router';
import { ArticlesComponent } from './components/page/articles/articles.component';
import { PageNotFoundComponent } from './components/page/page-not-found/page-not-found.component';
import { BooksComponent } from './components/page/books/books.component';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent:()=> import('./components/page/inicio/inicio.component').then((m) => m.InicioComponent)
  },
  {
    path: 'articulos',
    loadComponent:()=> import('./components/page/articles/articles.component').then((m) => m.ArticlesComponent)
  },
  {
    path: 'libros',
    loadComponent:()=> import('./components/page/books/books.component').then((m) => m.BooksComponent)
  },
  { path: '',
    loadComponent:()=> import('./components/page/inicio/inicio.component').then((m) => m.InicioComponent)
  },

  { path: '**',
    loadComponent:()=> import('./components/page/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
  },
];
