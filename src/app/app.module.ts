import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SectionFifthComponent } from './section-fifth/section-fifth.component';
import { SectionFirstComponent } from './section-first/section-first.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { SectionFourthComponent } from './section-fourth/section-fourth.component';
import { SectionHomePageComponent } from './section-home-page/section-home-page.component';
import { SectionSecondComponent } from './section-second/section-second.component';
import { SectionSixthComponent } from './section-sixth/section-sixth.component';
import { SectionThirdComponent } from './section-third/section-third.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionFirstComponent,
    SectionSecondComponent,
    SectionThirdComponent,
    SectionFourthComponent,
    SectionFifthComponent,
    SectionSixthComponent,
    SectionFooterComponent,
    SectionHomePageComponent,
    NavigationBarComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       HttpClientModule,

   TranslateModule.forRoot({

     loader: {

       provide: TranslateLoader,

       useFactory: httpTranslateLoader,

       deps: [HttpClient]

     }

   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http);
}