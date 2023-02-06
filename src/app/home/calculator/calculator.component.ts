import { BudgetService } from './../services/budget.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  budgetForm: FormGroup = this.fb.group({
    derribos: new FormControl(),
    paredesDetail: new FormControl(),
    suelo: new FormControl(),
    techo: new FormControl(),
    accesorios: new FormControl(),
    agua: new FormControl(false),
    desague: new FormControl(false),
    electricidad: new FormControl(false),
    completa: new FormControl(false),
    puerta: new FormControl(false),
    inodoro1: new FormControl(false),
    inodoro2: new FormControl(false),
    mueble1: new FormControl(false),
    mueble2: new FormControl(false),
    mueble3: new FormControl(false),
    grifo1: new FormControl(false),
    grifo2: new FormControl(false),
    grifo3: new FormControl(false),
    grifo1d:new FormControl(false),
    grifo2d: new FormControl(false),
    grifo3d: new FormControl(false),
    plato1: new FormControl(false),
    plato2: new FormControl(false),
    plato3: new FormControl(false),
    espejo1: new FormControl(false),
    espejo2: new FormControl(false),
    mampara1: new FormControl(false),
    mampara2: new FormControl(false)
  });
  budget: number = 0;
  showInstalaciones = false;
  showParedes = false;
  showTecho = false;
  showAccesorios = false;
  showIn = false;
  showMueble = false;
  showGrifoL = false;
  showGrifoD = false;
  showPlatoD = false;
  showEspejo = false;
  showMampara = false;

  constructor(private budgetService: BudgetService, private fb: FormBuilder) {}

  ngOnInit() {
    this.budgetForm = this.fb.group({
      derribos: [0],
      paredesDetail: [0],
      suelo: [0],
      colocarTecho: [0],
      iluminarTecho: [0],
      pintarTecho: [0],
      agua: [false],
      desague: [false],
      electricidad: [false],
      completa: [false],
      puerta: [false],
      inodoro1: [false],
      inodoro2:[false],
      mueble1:[false],
      mueble2: [false],
      mueble3: [false],
      grifo1: [false],
      grifo2:[false],
      grifo3: [false],
      grifo1d:[false],
      grifo2d: [false],
      grifo3d:[false],
      plato1: [false],
      plato2: [false],
      plato3:[false],
      espejo1: [false], 
      espejo2: [false],
      mampara1: [false],
      mampara2: [false]
    });
  }
  toggleInst() {
    this.showInstalaciones = !this.showInstalaciones;
  }
  toggleParedes() {
    this.showParedes = !this.showParedes;
  }
  toggleTecho() {
    this.showTecho = !this.showTecho;
  }
  toggleAccesorios() {
    this.showAccesorios = !this.showAccesorios;
  }

  toggleIn(){
this.showIn = !this.showIn;
  }
  toggleMueble(){
this.showMueble = !this.showMueble;
  }
  toggleGrifoL(){
this.showGrifoL = !this.showGrifoL;
  }
  toggleGrifoD(){
    this.showGrifoD = !this.showGrifoD;
  } 
  togglePlatoD(){
    this.showPlatoD = !this.showPlatoD;
  } 
  toggleEspejo(){
    this.showEspejo = !this.showEspejo;
  } 
  toggleMampara(){
    this.showMampara = !this.showMampara;
  }


  calculateBudget() {
    const formValues = this.budgetForm.value;
    return this.budgetService.calculateBudget(
      formValues.derribos,
      formValues.paredesDetail,
      formValues.suelo,
      formValues.colocarTecho,
      formValues.iluminarTecho,
      formValues.pintarTecho,
      formValues.agua,
      formValues.desague,
      formValues.electricidad,
      formValues.completa,
      formValues.puerta,
      formValues.inodoro1,
      formValues.inodoro2,
      formValues.mueble1,
      formValues.mueble2,
      formValues.mueble3,
      formValues.grifo1,
      formValues.grifo2,
      formValues.grifo3,
      formValues.grifo1d,
      formValues.grifo2d,
      formValues.grifo3d,
      formValues.plato1,
      formValues.plato2,
      formValues.plato3,
      formValues.espejo1,
      formValues.espejo2,
      formValues.mampara1,
      formValues.mampara2

    );
  }

  onAguaChecked(event: Event) {
    if (this.budgetForm.get('completa')!.value) {
      this.budgetForm.get('completa')!.setValue(false);
    }
  }

  onDesagueChecked(event: Event) {
    if (this.budgetForm.get('completa')!.value) {
      this.budgetForm.get('completa')!.setValue(false);
    }
  }

  onElectricidadChecked(event: Event) {
    if (this.budgetForm.get('completa')!.value) {
      this.budgetForm.get('completa')!.setValue(false);
    }
  }

  onCompletaChecked(event: Event) {
    if (this.budgetForm.get('completa')!.value) {
      this.budgetForm.get('agua')!.setValue(false);
      this.budgetForm.get('desague')!.setValue(false);
      this.budgetForm.get('electricidad')!.setValue(false);
    }
  }
}
