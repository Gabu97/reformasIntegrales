import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsCreatedComponent } from './budgets-created.component';

describe('BudgetsCreatedComponent', () => {
  let component: BudgetsCreatedComponent;
  let fixture: ComponentFixture<BudgetsCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetsCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
