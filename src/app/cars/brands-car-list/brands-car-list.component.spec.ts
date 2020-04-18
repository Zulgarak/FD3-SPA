import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCarListComponent } from './brands-car-list.component';

describe('BrandsCarListComponent', () => {
  let component: BrandsCarListComponent;
  let fixture: ComponentFixture<BrandsCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
