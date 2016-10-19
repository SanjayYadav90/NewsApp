import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to <b>Geeta-Kavita</b>',
        description: 'The <b>Geeta-Kavita App</b> is devoted to Hindi Literature, especially poetry and contemplations. The site is run by<i> Rajiv Krishna Saxena</i>, who is a professor of Biology / Immunology and was till recently the President / Vice President of the new South Asian University <b>(SAARC University)</b> in New Delhi.',
        image: 'assets/img/header-logo.png',
      },
      {
        title: 'Who are with us?',
        description: '<b>Prof. Saxena</b> has translated all 700 Sanskrit shlokas in Shrimad Bhagwat Geeta into metered Hindi verses. This work has been published by Pustak Mahal, Delhi, under the title “Geeta Kavya Madhuri”. ',
        image: 'assets/img/header-logo.png',
      },
      {
        title: 'How to reach us?',
        description: "Readers can mail their poems to <b>'Geeta-Kavita, 27 Empire Estate, Sultanpur, Mehrauli-Gurgaon Road, New Delhi 110030 (India)'</b>",
        image: 'assets/img/header-logo.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
