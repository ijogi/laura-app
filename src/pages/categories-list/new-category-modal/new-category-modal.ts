import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'new-category-modal',
  templateUrl: 'new-category-modal.html'
})
export class NewCategoryModalPage {
  categoryForm: FormGroup;
  private folderId: number;

  constructor(private viewCtrl: ViewController, private categorySvc: CategoryService, private fb: FormBuilder, private params: NavParams) {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });

    this.folderId = this.params.get('folderId');
  }

  createCategory() {
    const name = this.categoryForm.get('categoryName').value;
    const folderId = this.folderId;
    this.categorySvc.addCategory({id: Math.floor(Math.random() * 1000 + 1), name, folderId });
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
