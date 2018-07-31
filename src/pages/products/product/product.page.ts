import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { NewProductModalPage } from '../new-product-modal/new-product-modal';

@Component({
    selector: 'page-product',
    templateUrl: 'product.page.html'
})
export class ProductPage {
    product$: Observable<Product>;
    productName: string;
    productId: number;

    constructor(private navParams: NavParams, private productSvc: ProductService, private modalCtrl: ModalController) {
        this.productName = this.navParams.get('name');
        this.productId = this.navParams.get('id');
        this.product$ = this.productSvc.getProduct(this.productId);
    }

    productSold(product: Product) {
        if (product.amount && product.amount > 0) {
            product.amount = product.amount - 1;
        } else {
            product.amount = 0;
        }
        this.productSvc.updateProduct(product);
    }

    editProduct() {
        const modal = this.modalCtrl.create(NewProductModalPage, { productId: this.productId });
        modal.present();
    }

}
