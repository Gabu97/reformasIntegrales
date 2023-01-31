

//import {initializeApp} from 'firebase/app';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
//import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { CalculatorAdminComponent } from './calculator-admin/calculator-admin.component';
import { LoginComponent } from './login/login.component';
import { BudgetsCreatedComponent } from './budgets-created/budgets-created.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DetailBudgetComponent } from './detail-budget/detail-budget.component';

@NgModule({
  declarations: [


    CalculatorAdminComponent,
    LoginComponent,
    BudgetsCreatedComponent,
    DetailBudgetComponent,



  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,


 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideDatabase(()=> getDatabase()),
    provideAuth(() => getAuth()),
   

    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireStorageModule,
    // AngularFireDatabaseModule
  ],
  exports: [],
})
export class AdminModule {}
