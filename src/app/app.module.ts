import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FoldersListPage } from '../pages/folders/folders.page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriesPage } from '../pages/categories-list/categories.page';
import { InventoryService } from '../shared/services/inventory.service';
import { FolderService } from '../pages/folders/services/folder.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../pages/categories-list/services/category.service';
import { ProductsListPage } from '../pages/products/products-list/products-list.page';
import { ProductPage } from '../pages/products/product/product.page';
import { ProductService } from '../pages/products/services/product.service';
import { NewProductModalPage } from '../pages/products/new-product-modal/new-product-modal';
import { NewCategoryModalPage } from '../pages/categories-list/new-category-modal/new-category-modal';
import { NewFolderModalPage } from '../pages/folders/new-folder-modal/new-folder-modal';
import { PriceCalculationService } from '../shared/services/price-calculation.service';


@NgModule({
  declarations: [
    MyApp,
    FoldersListPage,
    CategoriesPage,
    ProductsListPage,
    ProductPage,
    NewFolderModalPage,
    NewCategoryModalPage,
    NewProductModalPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FoldersListPage,
    CategoriesPage,
    ProductsListPage,
    ProductPage,
    NewFolderModalPage,
    NewCategoryModalPage,
    NewProductModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InventoryService,
    FolderService,
    CategoryService,
    ProductService,
    PriceCalculationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
