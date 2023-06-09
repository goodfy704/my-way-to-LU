import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThirdComponent } from './section-third.component';

describe('SectionThirdComponent', () => {
  let component: SectionThirdComponent;
  let fixture: ComponentFixture<SectionThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
