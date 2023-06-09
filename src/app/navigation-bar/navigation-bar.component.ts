import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  constructor(private router: Router, public translate: TranslateService) {translate.addLangs(['lv', 'en']);
    translate.setDefaultLang('lv');}

  isAboutMePage(): boolean {
    return this.router.url === '/about-me';
  }


  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
