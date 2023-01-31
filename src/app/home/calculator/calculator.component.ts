import { BudgetService } from './../services/budget.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  budgetForm : FormGroup = this.fb.group ({
    kitchen: new FormControl(0, [ Validators.pattern('^[0-9][0-9]*$')]),
    bathrooms: new FormControl(0, [Validators.pattern('^[0-9][0-9]*$')]),
    painting: new FormControl(0, [Validators.pattern('^[0-9][0-9]*$')]),
  });
  budget: number = 0;
  constructor(private budgetService: BudgetService, private fb: FormBuilder) {}

  ngOnInit() {
    this.budgetForm.get('bathrooms')?.valueChanges.subscribe(() => {
      this.calculateBudget();
    });
    this.budgetForm.get('kitchen')?.valueChanges.subscribe(() => {
      this.calculateBudget();
    });
    this.budgetForm.get('painting')?.valueChanges.subscribe(() => {
      this.calculateBudget();
    });
  }
  calculateBudget() {
    const bathroomsTotal = this.budgetForm.get('bathrooms')?.value || 0 ;
    const kitchenTotal = this.budgetForm.get('kitchen')?.value || 0;
    const paintingTotal = this.budgetForm.get('painting')?.value || 0;

    this.budget = this.budgetService.calculateBudget(
      bathroomsTotal,
      kitchenTotal,
      paintingTotal
    );
  }
  invalidField(field: string) {
    return this.budgetForm.get(field)?.invalid &&
           this.budgetForm.get(field)?.touched;
  }
}
