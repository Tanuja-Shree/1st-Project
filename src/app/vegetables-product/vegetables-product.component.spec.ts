import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesProductComponent } from './vegetables-product.component';

describe('VegetablesProductComponent', () => {
  let component: VegetablesProductComponent;
  let fixture: ComponentFixture<VegetablesProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
