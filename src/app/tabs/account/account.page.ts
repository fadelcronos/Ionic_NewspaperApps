import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  username: string;
  acc_pass: string;
  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async login(){
    if(this.username != "" && this.username != ""){
      let body = {
        user: this.username,
        acc_pass: this.acc_pass,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.router.navigate(['/tabs/tabs/accoumt']);
          const toast = await this.toastCtrl.create({
		    message: 'Login Succesfully.',
		  	duration: 2000
		  });
		  toast.present();
		  this.username = "";
		  this.acc_pass = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
        duration: 2000,
        color: 'danger'
		  });
    	  toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Username or Password Invalid.',
    duration: 2000,
    color: 'danger'
	  });
	  toast.present();
    }
  }
}
