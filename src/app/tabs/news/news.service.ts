import { Injectable } from '@angular/core';

import { News } from './news.model';

@Injectable({
    providedIn: 'root'
  })

export class NewsService{
    private news: News[] = [
        new News(
            'n1',
            'Pasien Positif Corona di Indonesia Naik 500 Kali Lipat',
            'Jakarta, Jumlah pasien positif terinfeksi virus corona (Covid-19) di Indonesia melonjak signifikan. ',
            './assets/img/img1.jpeg',
            'Healthy',
            'Jakarta, Indonesia',
            // 'Jakarta, CNN Indonesia -- Jumlah pasien positif terinfeksi virus corona (Covid-19) di Indonesia melonjak signifikan. '
        ),
        new News(
            'n2',
            'Gempa Magnitudo 5,8 di Sigi, Tak Berpotensi Tsunami',
            'Jakarta, Gempa berkekuatan magnitudo 5,8 terjadi di titik 46 kilometer tenggara Sigi, Sulawesi Tengah. Badan Meteorologi...',
            './assets/img/img2.jpeg',
            'National',
            'Jakarta, Indonesia',
        ),
    ];

    get newss(){
        return [...this.news]
    }

    getnews(newsId){
        return{...this.news.find(newsss => {
            return newsss.id === newsId;
        })};
    }
}