import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  calculateBudget(
    derribos: number,
    paredesDetail: number,
    suelo: number,
    colocarTecho: number,
    iluminarTecho: number,
    pintarTecho: number,
    agua: boolean,
    desague: boolean,
    electricidad: boolean,
    completa: boolean,
    puerta: boolean,
    inodoro1: boolean,
    inodoro2: boolean,
    mueble1: boolean,
    mueble2: boolean,
    mueble3: boolean,
    grifo1: boolean,
    grifo2: boolean,
    grifo3: boolean,
    grifo1d: boolean,
    grifo2d: boolean,
    grifo3d: boolean,
    plato1: boolean,
    plato2: boolean,
    plato3: boolean, 
    espejo1: boolean, 
    espejo2: boolean, 
    mampara1: boolean, 
    mampara2: boolean, 

  ) {
    const derribosPrice = derribos * 44;
    const paredesDetailPrice = paredesDetail * 115;
    const sueloPrice = suelo * 115;
    const colocarTechoPrice = colocarTecho * 65;
    const iluminarTechoPrice = iluminarTecho * 65;
    const pintarTechoPrice = pintarTecho * 38;
    let totalPrice =
      derribosPrice +
      paredesDetailPrice +
      sueloPrice +
      colocarTechoPrice +
      iluminarTechoPrice +
      pintarTechoPrice;

    if (agua) {
      totalPrice += 620;
    }
    if (desague) {
      totalPrice += 480;
    }
    if (electricidad) {
      totalPrice += 520;
    }
    if (completa) {
      totalPrice += 1320;
    }
    if (puerta) {
      totalPrice += 1109;
    }
    if (inodoro1) {
      totalPrice += 930;
    }
    if (inodoro2) {
      totalPrice += 560;
    }
    if (mueble1) {
      totalPrice += 750;
    }
    if (mueble2) {
      totalPrice += 1050;
    }
    if (mueble3) {
      totalPrice += 2100;
    }
    if (grifo1) {
      totalPrice += 100;
    }
    if (grifo2) {
      totalPrice += 150;
    }
    if (grifo3) {
      totalPrice += 300;
    }
    if (grifo1d) {
      totalPrice += 260;
    }
    if (grifo2d) {
      totalPrice += 360;
    }
    if (grifo3d) {
      totalPrice += 800;
    }
    if (plato1) {
      totalPrice += 720;
    }
    if (plato2) {
      totalPrice += 880;
    }
    if (plato3) {
      totalPrice += 690;
    }
    if (espejo1) {
      totalPrice += 220;
    }
    if (espejo2) {
      totalPrice += 110;
    }
    if (mampara1) {
      totalPrice += 840;
    }
    if (mampara2) {
      totalPrice += 570;
    }

    return totalPrice;
  }

  calculateBudgetAdmin(bathrooms: number, kitchen: number, painting: number) {
    const bathroomPrice = bathrooms * 500;
    const kitchenPrice = kitchen * 200;
    const paintingPrice = painting * 100;
    return bathroomPrice + kitchenPrice + paintingPrice;
  }
}
