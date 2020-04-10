import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
      path: 'tabs',
      component: TabsPage,
      children:[
          {
              path: 'news',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
                  },
                  {
                    path: 'create',
                    loadChildren: () => import('./news/news-create/news-create.module').then(m => m.NewsCreatePageModule)
                },
                {
                    path: 'edit/:id/:title/:desc/:loc/:cat',
                    loadChildren: () => import('./news/news-create/news-create.module').then(m => m.NewsCreatePageModule)
                },
              ]
          },{
              path: 'account',
              children: [
                  {
                      path: '',
                      loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
                  },
                  {
                      path: 'regis',
                      loadChildren: () => import('./account/registration/registration.module').then(m => m.RegistrationPageModule)
                  },
              ]
          },
          {
              path: '',
              redirectTo: '/tabs/tabs/news',
              pathMatch: 'full'
          }
      ]
  },
  {
      path: '',
      redirectTo: '/tabs/tabs/news',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
