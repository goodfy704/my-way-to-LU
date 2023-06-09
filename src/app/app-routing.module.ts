import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { SectionHomePageComponent } from './section-home-page/section-home-page.component';

const routes: Routes = [
    { path: '', component: SectionHomePageComponent },
  { path: 'about-me', component: AboutMeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
