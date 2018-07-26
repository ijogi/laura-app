import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, ModalController } from 'ionic-angular';

import { CategoriesPage } from '../categories-list/categories';
import { NewFolderModalPage } from '../new-folder-modal/new-folder-modal';
import { FolderService } from './services/folder.service';
import { Folder } from './intefaces/folder';

@Component({
  selector: 'page-folders',
  templateUrl: 'folders.html'
})
export class FoldersListPage {
  folders$: Observable<Folder[]>;

  constructor(private  navCtrl: NavController, private folderSvc: FolderService, private modalCtrl: ModalController) {
    this.folders$ = this.folderSvc.getFolders();
  }

  goTo(id: number) {
    this.navCtrl.push(CategoriesPage, { id });
  }

  addFolder() {
    const modal = this.modalCtrl.create(NewFolderModalPage);
    modal.present();
  }

}
