import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BudgetService } from './../../home/services/budget.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  remove,
  getDatabase,
} from '@angular/fire/database';

@Component({
  selector: 'app-detail-budget',
  templateUrl: './detail-budget.component.html',
  styleUrls: ['./detail-budget.component.css'],
})
export class DetailBudgetComponent {
  constructor(
    public database: Database,
    private BudgetService: BudgetService,
    private router: Router,
    private modal: NgbModal
  ) {}
  @Output() close = new EventEmitter<void>();
  @Input() budget: any;
  //@Input() budgetId:any;
  //@Input() value:any;
  @Input() selectedBudget: any;

  openSM(contenido: any) {
    this.modal.open(contenido, { size: 'sm' });
  }
  /* closeModal() {
    this.close.emit();
  }*/
  calculateBudget() {
    this.budget.value.total = this.BudgetService.calculateBudget(
      this.budget.value.bathrooms,
      this.budget.value.kitchen,
      this.budget.value.painting
    );
  }

  updateBudget(value: any) {
    update(ref(this.database, 'budgets/' + value.key), {
      name: this.budget.value.name,
      bathrooms: this.budget.value.bathrooms,
      kitchen: this.budget.value.kitchen,
      painting: this.budget.value.painting,
      total: this.budget.value.total,
    });
    alert('Budget updated');
    this.close.emit();
  }
}
