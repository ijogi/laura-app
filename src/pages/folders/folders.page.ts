import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, ModalController } from 'ionic-angular';

import { CategoriesPage } from '../categories-list/categories.page';
import { FolderService } from './services/folder.service';
import { Folder } from './intefaces/folder';
import { NewFolderModalPage } from './new-folder-modal/new-folder-modal';

@Component({
  selector: 'page-folders',
  templateUrl: 'folders.html'
})
export class FoldersListPage {
  folders$: Observable<Folder[]>;

  constructor(private  navCtrl: NavController, private folderSvc: FolderService, private modalCtrl: ModalController) {
    this.folders$ = this.folderSvc.getFolders();
  }

  goTo(id: number, name: string) {
    this.navCtrl.push(CategoriesPage, { id, name });
  }

  addFolder() {
    const modal = this.modalCtrl.create(NewFolderModalPage);
    modal.present();
  }

}
