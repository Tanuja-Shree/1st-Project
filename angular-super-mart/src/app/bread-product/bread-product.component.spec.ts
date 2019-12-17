import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadProductComponent } from './bread-product.component';

describe('BreadProductComponent', () => {
  let component: BreadProductComponent;
  let fixture: ComponentFixture<BreadProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
