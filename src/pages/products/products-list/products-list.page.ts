import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ProductPage } from '../product/product.page';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { NewProductModalPage } from '../new-product-modal/new-product-modal';

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html'
})
export class ProductsListPage {
  private categoryId: number;
  products$: Observable<Product[]>;
  categoryName: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private productSvc: ProductService, private modalCtrl: ModalController) {
    this.categoryName = this.navParams.get('name');
    this.categoryId = this.navParams.get('id');
    this.products$ = this.productSvc.getProducts(this.categoryId);
  }

  goTo(id: number) {
    this.navCtrl.push(ProductPage, { id });
  }

  addProduct() {
    const modal = this.modalCtrl.create(NewProductModalPage, { categoryId: this.categoryId });
    modal.present();
  }

}
