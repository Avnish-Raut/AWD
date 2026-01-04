import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashbaord } from './my-dashbaord';

describe('MyDashbaord', () => {
  let component: MyDashbaord;
  let fixture: ComponentFixture<MyDashbaord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDashbaord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDashbaord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
