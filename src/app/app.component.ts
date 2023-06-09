import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyWayIntoLU';

  constructor(

   public translate: TranslateService

 ) {

   translate.addLangs(['lv', 'en']);

   translate.setDefaultLang('lv');

  }
  
  switchLang(lang: string) {

   this.translate.use(lang);

 }
}
