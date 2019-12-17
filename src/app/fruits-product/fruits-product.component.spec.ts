import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsProductComponent } from './fruits-product.component';

describe('FruitsProductComponent', () => {
  let component: FruitsProductComponent;
  let fixture: ComponentFixture<FruitsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
