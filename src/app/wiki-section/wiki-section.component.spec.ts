import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSectionComponent } from './wiki-section.component';

describe('WikiSectionComponent', () => {
  let component: WikiSectionComponent;
  let fixture: ComponentFixture<WikiSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
