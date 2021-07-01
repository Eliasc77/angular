import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStatusComponent } from './shop-status.component';

describe('ShopStatusComponent', () => {
  let component: ShopStatusComponent;
  let fixture: ComponentFixture<ShopStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
