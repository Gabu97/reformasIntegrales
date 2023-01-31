import { Router } from '@angular/router';
import { UserService } from 'src/app/home/services/user.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  remove,
} from '@angular/fire/database';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-budgets-created',
  templateUrl: './budgets-created.component.html',
  styleUrls: ['./budgets-created.component.css'],
})
export class BudgetsCreatedComponent implements OnInit {
  constructor(
    public database: Database,
    private UserService: UserService,
    private router: Router,
   
  ) {}
  budgets: any[] = [];
  selectedBudget: any;
  modalSwitch:boolean = false;
  ngOnInit() {
    this.getBudgets();
  }
  getBudgets() {
    const starCountRef = ref(this.database, 'budgets/');

    onValue(starCountRef, (snapshot) => {
      this.budgets = snapshot.val();
      console.log(this.budgets);

      //this.ChangeDetectorRef.detectChanges();
    });
  }
  removeBudget(budget: any) {
    remove(ref(this.database, 'budgets/' + budget.key));
    alert('removed');
  }

  onClick() {
    this.UserService.logout()
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      })
      .catch((error) => console.log(error));
  }
/*
  isModalOpen = false;

  openModal(budget: any) {
    this.isModalOpen = true;
    this.selectedBudget = budget;
  }

  closeModal() {
    this.isModalOpen = false;
  }*/
  openModal(budget:any){
    this.modalSwitch = true;
    this.selectedBudget = budget;
  }
  closeModal(){
    this.modalSwitch = false;
  }
}
