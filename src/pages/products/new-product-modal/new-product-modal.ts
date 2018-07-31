import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'new-product-modal',
  templateUrl: 'new-product-modal.html'
})
export class NewProductModalPage {
  productForm: FormGroup;
  private categoryId: number;
  private productId: number;

  constructor(private viewCtrl: ViewController, private productSvc: ProductService, private fb: FormBuilder, private params: NavParams) {
    this.initForm();
    this.productId = this.params.get('productId');
    this.productSvc.getProduct(this.productId).first().do(product => this.initForm(product)).subscribe();
    this.categoryId = this.params.get('categoryId');
  }

  private initForm(product: Product = null) {
    this.productForm = this.fb.group({
      productName: [!!product && !!product.name ? product.name : '', Validators.required],
      price: [!!product && !!product.price ? product.price : '', Validators.required],
      amount: [!!product && !!product.amount ? product.amount : '', Validators.required],
      cost: [!!product && !!product.cost ? product.cost : '', Validators.required],
    });
  }

  createProduct(): void {
    const name = this.productForm.get('productName').value;
    const price = this.productForm.get('price').value;
    const amount = this.productForm.get('amount').value;
    const cost = this.productForm.get('cost').value;
    const categoryId = this.categoryId;
    this.productSvc.addProduct({ id: Math.floor(Math.random() * 1000 + 1), name, categoryId, price, amount, cost });
    this.viewCtrl.dismiss();
  }

  updateProduct(): void {
    this.productSvc.getProduct(this.productId)
      .first()
      .do(proudct => this.updateProductDetails(proudct))
      .do(() => this.dismiss())
      .subscribe();
  }

  private updateProductDetails(product: Product): void {
    const productDetails = this.getProductDetailsFromForm();
    this.productSvc.updateProduct({ id: product.id, ...productDetails });
  }

  private getProductDetailsFromForm(): Product {
    const name: string = this.productForm.get('productName').value;
    const price: number = +this.productForm.get('price').value;
    const amount: number = +this.productForm.get('amount').value;
    const cost: number = +this.productForm.get('cost').value;
    const categoryId = this.categoryId;
    return { name, price, amount, cost, categoryId };
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
