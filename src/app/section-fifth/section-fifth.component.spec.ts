import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFifthComponent } from './section-fifth.component';

describe('SectionFifthComponent', () => {
  let component: SectionFifthComponent;
  let fixture: ComponentFixture<SectionFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFifthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
