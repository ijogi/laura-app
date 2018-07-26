import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsListPage } from '../products-list/products-list';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'page-categories-list',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  categories$: Observable<Category[]>;

  constructor(private navCtrl: NavController, private navParams: NavParams, private categorySvc: CategoryService) {
    const folderId = this.navParams.get('id');
    this.categories$ = this.categorySvc.getCategories(folderId);
  }

  goTo(id: number) {
    this.navCtrl.push(ProductsListPage, { id });
  }

}
