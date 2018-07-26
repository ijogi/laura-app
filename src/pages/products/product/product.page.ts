import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'page-product',
    templateUrl: 'product.page.html'
})
export class ProductPage {
    product$: Observable<Product>;
    productName: string;

    constructor(private navParams: NavParams, private productSvc: ProductService) {
        this.productName = this.navParams.get('name');
        const productId = this.navParams.get('id');
        this.product$ = this.productSvc.getProduct(productId);
    }

    productSold(product: Product) {
        product.amount = !!product.amount ? product.amount += 1 : 1;
        this.productSvc.updateProduct(product);
    }

}
