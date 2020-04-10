import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.page.html',
  styleUrls: ['./news-create.page.scss'],
})
export class NewsCreatePage implements OnInit {

  news_title: string = "";
  news_img: string = "";
  news_description: string = "";
  news_category: string = "";
  news_location: string = "";
  id: number;
  constructor(
    private postPvdr: PostProvider,
  	private router: Router,
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.news_title = data.title;
      this.news_description= data.desc;
      this.news_category = data.cat;
      this.news_location = data.loc;
      
  		console.log(data);
  	});
  }

  createNews(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'add',
  			news_title: this.news_title,
        news_img: this.news_img,
        news_description: this.news_description,
        news_category: this.news_category,
        news_location: this.news_location,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        var alertmsg = data.msg;
        if(data.success){
          this.router.navigate(['/tabs/tabs/news']);
          this.showToastSucc();
        }else{
          this.showToastFail();
        }
  		});
  	});

  }

  async showToastSucc(){
    let toast = await this.toastCtrl.create({
      message: 'News Created !',
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

  updateNews(){
    return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
  			news_id : this.id,
  			news_description : this.news_description,
        news_title : this.news_title,
        news_location : this.news_location,
        news_category : this.news_category,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        if(data.success){
          this.router.navigate(['/tabs/tabs/news']);
          this.showToastSuc();
        }else{
          this.showToastFail();
        }
  		});
  	});
  }
  async showToastSuc(){
    let toast = await this.toastCtrl.create({
      message: 'News Updated !',
            duration: 3000,
            position: 'top',
            color: 'success'
    });
    toast.present();
  }
  

}
