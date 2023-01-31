import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorAdminComponent } from './calculator-admin.component';

describe('CalculatorAdminComponent', () => {
  let component: CalculatorAdminComponent;
  let fixture: ComponentFixture<CalculatorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
