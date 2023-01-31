import { BudgetsCreatedComponent } from './admin/budgets-created/budgets-created.component';
import { CalculatorAdminComponent } from './admin/calculator-admin/calculator-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { BudgetComponent } from './home/budget/budget.component';
import { ModalPhotoComponent } from './home/modal-photo/modal-photo.component';
import { HeroComponent } from './home/hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './home/galery/galery.component';
import { ContactComponent } from './home/contact/contact.component';
import { CalculatorComponent } from './home/calculator/calculator.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import * as path from 'path';

const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'modal-photo', component: ModalPhotoComponent },
  { path: 'budget', component: BudgetComponent },
  {
    path: 'budgetsCreated',
    component: BudgetsCreatedComponent,
    ...canActivate(() =>redirectUnauthorizedTo(['/loginAdmin'])),
  },
  {
    path: 'calculatorAdmin',
    component: CalculatorAdminComponent,
    ...canActivate(() =>redirectUnauthorizedTo(['/loginAdmin'])),
  },
  { path: 'loginAdmin', component: LoginComponent },

  { path: '', component: HeroComponent },
  { path: '**', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
