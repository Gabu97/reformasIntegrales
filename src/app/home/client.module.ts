//import {initializeApp} from 'firebase/app';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { GaleryComponent } from './galery/galery.component';
import { ModalPhotoComponent } from './modal-photo/modal-photo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BudgetComponent } from './budget/budget.component';
import { ContactComponent } from './contact/contact.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
//import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    HeroComponent,
    GaleryComponent,
    ModalPhotoComponent,
    CalculatorComponent,
    BudgetComponent,
    ContactComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,


    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireStorageModule,
    // AngularFireDatabaseModule
  ],
  exports: [],
})
export class ClientModule {}
