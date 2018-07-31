import { Injectable } from "@angular/core";

@Injectable()
export class PriceCalculationService {
    calculateSalePrice(materialCost: number, hours: number, pricePerHour: number, generalCosts: number, profit: number, isSoldOnStreet: boolean) {
        const price = ((materialCost + (hours * pricePerHour) + generalCosts) + profit) * (isSoldOnStreet ? 2 : 1);
        return price;
    }
}