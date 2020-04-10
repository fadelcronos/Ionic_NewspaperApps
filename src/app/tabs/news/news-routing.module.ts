import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
  {
    path: 'news-detail/:id/:title/:desc/:cat/:loc',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./news-create/news-create.module').then( m => m.NewsCreatePageModule)
  },
  {
    path: ':newsId',
    loadChildren: () => import('./news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
