import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormCarComponent } from './add-form-car.component';

describe('AddFormCarComponent', () => {
  let component: AddFormCarComponent;
  let fixture: ComponentFixture<AddFormCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
