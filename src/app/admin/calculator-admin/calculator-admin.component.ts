import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/home/services/user.service';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/home/services/budget.service';

import { Form, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  remove,
  getDatabase,
} from '@angular/fire/database';
import { push } from 'firebase/database';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-calculator-admin',
  templateUrl: './calculator-admin.component.html',
  styleUrls: ['./calculator-admin.component.css'],
})
export class CalculatorAdminComponent implements OnInit {
  budgetForm = new FormGroup({
    name: new FormControl(),
    kitchen: new FormControl(0, [Validators.pattern('^[0-9][0-9]*$')]),
    bathrooms: new FormControl(0, [Validators.pattern('^[0-9][0-9]*$')]),
    painting: new FormControl(0, [Validators.pattern('^[0-9][0-9]*$')]),
  });
  budget: number = 0;
  bathroomsPrice: number = 0;
  kitchensPrice: number = 0;
  paintingsPrice: number = 0;

  constructor(
    private UserService: UserService,
    private router: Router,
    private budgetService: BudgetService,
    private fb: FormBuilder,
    public database: Database,
    private ChangeDetectorRef: ChangeDetectorRef
  ) {}

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
    const bathroomsTotal = this.budgetForm.get('bathrooms')?.value || 0;
    const kitchenTotal = this.budgetForm.get('kitchen')?.value || 0;
    const paintingTotal = this.budgetForm.get('painting')?.value || 0;
    this.bathroomsPrice = this.budgetService.calculateBudget(
      bathroomsTotal,
      0,
      0
    );
    this.kitchensPrice = this.budgetService.calculateBudget(0, kitchenTotal, 0);
    this.paintingsPrice = this.budgetService.calculateBudget(
      0,
      0,
      paintingTotal
    );
    this.budget = this.budgetService.calculateBudget(
      bathroomsTotal,
      kitchenTotal,
      paintingTotal
    );
  }

  onClick() {
    this.UserService.logout()
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      })
      .catch((error) => console.log(error));
  }

  invalidField(field: string) {
    return (
      this.budgetForm.get(field)?.invalid && this.budgetForm.get(field)?.touched
    );
  }
  generateKey(): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  saveBudget(value: any) {
    const budgetId = this.generateKey();
    set(ref(this.database, 'budgets/' + budgetId), {
      name: value.name,
      bathrooms: value.bathrooms,
      kitchen: value.kitchen,
      painting: value.painting,
      total: this.budget,
    });
    alert('saved!');
  }
  /*
  getBudget(value: any) {
    const starCountRef = ref(this.database, 'budgets/' + value.name);
    const paintingInput = document.getElementById(
      'painting'
    ) as HTMLInputElement;
    const bathroomsInput = document.getElementById(
      'bathrooms'
    ) as HTMLInputElement;
    const kitchenInput = document.getElementById('kitchen') as HTMLInputElement;

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      paintingInput.value = data.painting;
      kitchenInput.value = data.kitchen;
      bathroomsInput.value = data.bathrooms;
      
      //this.ChangeDetectorRef.detectChanges();
    });

  }*/
  //updateView() {

  // this.ChangeDetectorRef.detectChanges();

  //}
  /* updateBudget(value: any) {
    update(ref(this.database, 'budgets/' + value.name), {
      bathrooms: value.bathrooms,
      kitchen: value.kitchen,
      painting: value.painting,
    });
    alert('user updated');
  }

  removeBudget(value: any) {
    remove(ref(this.database, 'budgets/' + value.name));
    alert('removed');
  }*/

}
