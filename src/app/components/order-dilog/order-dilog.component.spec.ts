import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDilogComponent } from './order-dilog.component';

describe('OrderDilogComponent', () => {
  let component: OrderDilogComponent;
  let fixture: ComponentFixture<OrderDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDilogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
