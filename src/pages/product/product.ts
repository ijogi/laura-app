import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Product, InventoryService } from '../../shared/services/inventory.service';

@Component({
    selector: 'page-product',
    templateUrl: 'product.html'
})
export class ProductPage {
    product$: Observable<Product>;

    constructor(private navParams: NavParams, private inventorySvc: InventoryService) {
        const productId = this.navParams.get('id');
        this.product$ = this.inventorySvc.getProduct(productId);
    }

}
