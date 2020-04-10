import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  username: string = "";
  fullname: string = "";
  acc_email: string = "";
  acc_pass: string = "";
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  async regis(){
    if(this.username==""){
      const toast = await this.toastCtrl.create({
        message: 'Username is required',
        duration: 3000
      });
      toast.present();
  }else if(this.acc_pass==""){
      const toast = await this.toastCtrl.create({
        message: 'Password is required',
        duration: 3000
      });
      toast.present();
  }else{

    let body = {
      username: this.username,
      acc_pass: this.acc_pass,
      fullname: this.fullname,
      acc_email: this.acc_email,
      aksi: 'register'
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
      var alertpesan = data.msg;
      if(data.success){
        this.router.navigate(['/tabs/tabs/account']);
        const toast = await this.toastCtrl.create({
          message: 'Register succesful',
          duration: 3000,
          color: 'success'
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 3000,
          color: 'danger'
        });
        toast.present();
      }
    });

  }
  }

}
