import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiResultsComponent } from './wiki-results.component';

describe('WikiResultsComponent', () => {
  let component: WikiResultsComponent;
  let fixture: ComponentFixture<WikiResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
