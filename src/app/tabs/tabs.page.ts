import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  title = 'News'

  onChangePages = (name) =>{
    this.title=name;
    console.log(name);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
