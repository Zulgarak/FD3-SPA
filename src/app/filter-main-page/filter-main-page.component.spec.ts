import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMainPageComponent } from './filter-main-page.component';

describe('FilterMainPageComponent', () => {
  let component: FilterMainPageComponent;
  let fixture: ComponentFixture<FilterMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
