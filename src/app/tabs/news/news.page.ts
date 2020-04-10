import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './news.model';  
import { PostProvider } from '../../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { promise } from 'protractor';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newss: any = [];

  constructor(
    private newsService: NewsService,
    private postprovider: PostProvider,
    private router: Router
    ) { }

  ngOnInit() {
    // this.News = this.newsService.newss;
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
      };

      this.postprovider.postData(body, 'proses-api.php').subscribe(data => {
        for(let news of data.result){
          this.newss.push(news);
          console.log(news);
        }
        resolve(true);
      });
    });
  }
  
  // showNews(id, title, desc, cat, loc, img){
  //   this.router.navigate(['/news-detail/' + id + '/' + title + '/' + desc + '/' + cat + '/' + loc + '/' + img ]);
  // }
  // showNews(news.news_id, news.news_title, news.news_description, news.news_category, news.news_location, news_news_img)
  showDetail(id, title, desc, cat, loc){
    this.router.navigate(['tabs/tabs/news/news-detail/'+ id + '/' + title + '/' + desc + '/' + cat + '/' + loc])
  }

  ionViewWillEnter(){
    this.newss = [];
    this.ngOnInit();
  }
}
