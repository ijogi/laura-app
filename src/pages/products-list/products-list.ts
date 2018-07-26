import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { InventoryService, Product } from '../../shared/services/inventory.service';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html'
})
export class ProductsListPage {
  products$: Observable<Product[]>;

  constructor(private navCtrl: NavController, private navParams: NavParams, private intentorySvc: InventoryService) {
    const categoryId = this.navParams.get('id')
    this.products$ = this.intentorySvc.getProducts(categoryId);
  }

  goTo(id: number) {
    this.navCtrl.push(ProductPage, { id });
  }

}
