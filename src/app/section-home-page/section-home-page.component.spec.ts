import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomePageComponent } from './section-home-page.component';

describe('SectionHomePageComponent', () => {
  let component: SectionHomePageComponent;
  let fixture: ComponentFixture<SectionHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
