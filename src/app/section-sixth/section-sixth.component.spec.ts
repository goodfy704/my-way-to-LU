import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSixthComponent } from './section-sixth.component';

describe('SectionSixthComponent', () => {
  let component: SectionSixthComponent;
  let fixture: ComponentFixture<SectionSixthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSixthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
