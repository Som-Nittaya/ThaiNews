import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HotnewsPage } from '../hotnews/hotnews';
import { SciencePage } from '../science/science';
import { EntertainmentPage } from '../entertainment/entertainment';
import { DetailPage } from '../detail/detail';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HotnewsPage;
  tab2Root = SciencePage;
  tab3Root = EntertainmentPage;

  constructor() {

  }
}
