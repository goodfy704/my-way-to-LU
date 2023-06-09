import { Component, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-section-home-page',
  templateUrl: './section-home-page.component.html',
  styleUrls: ['./section-home-page.component.scss']
})
export class SectionHomePageComponent {
  
  constructor(private elementRef: ElementRef) {

   function observeElementVisibility(element: HTMLElement): Observable<boolean> {
  return new Observable<boolean>((observer) => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      const isVisible = entries.some((entry) => entry.isIntersecting);
      observer.next(isVisible);
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    return () => intersectionObserver.disconnect();
  });
}

function addClassOnVisibility(elementSelector: string, classToAdd: string): void {
  const parentElements = document.querySelectorAll(elementSelector);

  parentElements.forEach((parentElement) => {
    const image = parentElement.querySelector('.img1');
    if (image instanceof HTMLElement) {
      observeElementVisibility(image)
        .pipe(
          distinctUntilChanged(),
          filter((isVisible) => isVisible),
          mergeMap(() => fromEvent(image, 'transitionend').pipe(map(() => parentElement))),
        )
        .subscribe(() => {
          parentElement.classList.add(classToAdd);
        });
    }
  });
}



    function createParallaxEffect(imageSelector: string, scrollSpeed: number): void {
  const images = document.querySelectorAll<HTMLElement>(imageSelector);

  function handleScroll(): void {
    const scrollPosition = window.scrollY;

    images.forEach((image) => {
      const imageOffset = image.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollOffset = (scrollPosition - imageOffset) * scrollSpeed;
      
      image.style.transform = `translateY(${scrollOffset}px)`;
    });
  }

  window.addEventListener('scroll', handleScroll);
}

// Example usage: Create a parallax effect for elements with class "parallax-image" and scroll speed of 0.5
createParallaxEffect('.img-2017', 0.8);
   }

  ngOnInit() {
    const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];
    const items = document.querySelectorAll('.item-list-item');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        const correspondingItemId = sectionId.replace('section', 'item');
        const correspondingItem = document.getElementById(correspondingItemId);

        if (entry.isIntersecting) {
          items.forEach(item => {
            if (item === correspondingItem) {
              item.classList.add('hovered');
            } else {
              item.classList.remove('hovered');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        observer.observe(targetSection);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const sectionElement = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  } 

  
}
