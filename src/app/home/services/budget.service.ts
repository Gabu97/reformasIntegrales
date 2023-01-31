import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
calculateBudget(bathrooms: number, kitchen: number, painting: number) {
    const bathroomPrice = bathrooms * 500;
    const kitchenPrice = kitchen * 200;
    const paintingPrice = painting * 100;
    return bathroomPrice + kitchenPrice + paintingPrice;
    }

}