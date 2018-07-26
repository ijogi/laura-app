import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FoldersListPage } from '../pages/folders/folders';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriesPage } from '../pages/categories-list/categories';
import { ProductsListPage } from '../pages/products-list/products-list';
import { ProductPage } from '../pages/product/product';
import { InventoryService } from '../shared/services/inventory.service';
import { NewFolderModalPage } from '../pages/new-folder-modal/new-folder-modal';
import { FolderService } from '../pages/folders/services/folder.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../pages/categories-list/services/category.service';

@NgModule({
  declarations: [
    MyApp,
    FoldersListPage,
    CategoriesPage,
    ProductsListPage,
    ProductPage,
    NewFolderModalPage
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
    NewFolderModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InventoryService,
    FolderService,
    CategoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
