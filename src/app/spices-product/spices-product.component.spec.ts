import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicesProductComponent } from './spices-product.component';

describe('SpicesProductComponent', () => {
  let component: SpicesProductComponent;
  let fixture: ComponentFixture<SpicesProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicesProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
