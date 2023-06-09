import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss']
})
export class SectionFooterComponent {

  constructor(private router: Router) { }
  
  isAboutMePage(): boolean {
    return this.router.url !== '/about-me';
  }

  onClickButton(): void {

  const targetUrl = '/about-me';
    
  this.router.navigateByUrl(targetUrl)
    .then(() => {
      setTimeout(() => {
          this.scrollToTop();
        }, 10);
    });
  }


  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
}
