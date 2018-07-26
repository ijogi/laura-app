import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FolderService } from '../services/folder.service';

@Component({
  selector: 'new-folder-modal',
  templateUrl: 'new-folder-modal.html'
})
export class NewFolderModalPage {
  folderForm: FormGroup;

  constructor(private viewCtrl: ViewController, private folderSvc: FolderService, private fb: FormBuilder) {
    this.folderForm = this.fb.group({
      folderName: ['', Validators.required]
    })
  }

  createFolder() {
    const name = this.folderForm.get('folderName').value;
    this.folderSvc.addFolder({id: Math.floor(Math.random() * 1000 + 1), name});
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
