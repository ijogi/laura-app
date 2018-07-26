import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'new-product-modal',
  templateUrl: 'new-product-modal.html'
})
export class NewProductModalPage {
  productForm: FormGroup;
  private categoryId: number;

  constructor(private viewCtrl: ViewController, private productSvc: ProductService, private fb: FormBuilder, private params: NavParams) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required],
      cost: ['', Validators.required],
    });

    this.categoryId = this.params.get('categoryId');
  }

  createProduct() {
    const name = this.productForm.get('productName').value;
    const price = this.productForm.get('price').value;
    const amount = this.productForm.get('amount').value;
    const cost = this.productForm.get('cost').value;
    const categoryId = this.categoryId;
    this.productSvc.addProduct({id: Math.floor(Math.random() * 1000 + 1), name, categoryId, price, amount, cost });
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
