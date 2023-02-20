import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BudgetService } from './../../home/services/budget.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Database, ref, update } from '@angular/fire/database';
import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from 'docx';
//import { ChildProcess, spawn } from 'child_process';
import { saveAs } from 'file-saver';
//import * as child_process from 'child_process';
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
 // budget: any;
  openSM(contenido: any) {
    this.modal.open(contenido, { size: 'sm' });
  }
  /* closeModal() {
    this.close.emit();
  }*/
  calculateBudget() {
    this.budget.value.total = this.BudgetService.calculateBudgetAdmin(
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
  createWordDocument() {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(`Name: ${this.budget.value.name}`),
                new TextRun({
                  text: `Bathrooms: ${this.budget.value.bathrooms}`,
                  bold: true,
                }),
                new TextRun({
                  text: `Kitchen: ${this.budget.value.kitchen}`,
                  bold: true,
                }),
                new TextRun({
                  text: `Painting: ${this.budget.value.painting}`,
                  bold: true,
                }),
                new TextRun({
                  text: `Total: ${this.budget.value.total}`,
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });
/*
    Packer.toBuffer(doc).then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
*/
    /*
    Packer.toBuffer(doc).then((buffer) => {
      fs.writeFileSync(this.budget.value.name + '.docx', buffer);
      const wordProcess: ChildProcess = spawn('winword', [this.budget.value.name + '.docx']);
    });*/
    
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, this.budget.value.name + ".docx");
    });
  }
}
