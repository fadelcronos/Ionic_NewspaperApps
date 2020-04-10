import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';
import { News } from '../news.model';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../../providers/post-provider';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  loadNews: News;
  id: number;
  title: string;
  loc: string;
  desc: string;
  imgurl: string;
  cat: string;
  choose = "";
  constructor(private actRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.title = data.title;
      this.desc = data.desc;
      this.loc = data.loc;
      this.imgurl = data.imgurl;
      this.cat = data.cat;
      console.log(data);
  	});

  }

  deleteNews(id){
    let body = {
      aksi : 'delete',
      news_id : id
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      if(data.success){
        this.router.navigate(['/tabs/tabs/news']);
        this.showToastSucc();
      }else{
        this.showToastFail();
      }
    });
  }
  async showToastSucc(){
    let toast = await this.toastCtrl.create({
      message: 'News Deleted !',
            duration: 3000,
            position: 'top',
            color: 'success'
    });
    toast.present();
  }
  async showToastFail(){
    let toast = await this.toastCtrl.create({
      message: 'Error!, Something went wrong',
            duration: 3000,
            position: 'top',
            color: 'danger',
    });
    toast.present();
  }

  act(){
    console.log(this.choose)
  }

  async alertConfirm(){
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure wan to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm cancel: Blah');
          }
        }, {
          text: 'Yes, Delete',
          handler: () => {
            this.deleteNews(this.id);
            this.router.navigate(['/tabs/tabs/news']);
          }
        }
      ]
    });
    
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  edit(id, title, desc, loc, cat){
    this.router.navigate(['/tabs/tabs/news/edit/' + id + '/' + title + '/' + desc +  '/' + loc + '/' + cat]);
  }





}
