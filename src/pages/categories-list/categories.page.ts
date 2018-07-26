import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category';
import { CategoryService } from './services/category.service';
import { ProductsListPage } from '../products/products-list/products-list.page';
import { NewCategoryModalPage } from './new-category-modal/new-category-modal';

@Component({
  selector: 'page-categories-list',
  templateUrl: 'categories.page.html'
})
export class CategoriesPage {
  private folderId: number;
  folderName: string;
  categories$: Observable<Category[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private categorySvc: CategoryService,
    private modalCtrl: ModalController) {
      this.folderId = this.navParams.get('id');
      this.folderName = this.navParams.get('name');
      this.categories$ = this.categorySvc.getCategories(this.folderId);
  }

  goTo(id: number, name: string) {
    this.navCtrl.push(ProductsListPage, { id, name });
  }

  addCategory() {
    const modal = this.modalCtrl.create(NewCategoryModalPage, { folderId: this.folderId });
    modal.present();
  }

}
