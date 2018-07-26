import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class InventoryService {

    private products: Product[] = [
        { id: 10000, name: 'product 1', categoryId: 1000 }, { id: 10001, name: 'product 2', categoryId: 1000 },
        { id: 20000, name: 'product 3', categoryId: 1001 }, { id: 20001, name: 'product 4', categoryId: 1001 },
        { id: 30000, name: 'product 5', categoryId: 2000 }, { id: 30001, name: 'product 6', categoryId: 2000 },
        { id: 40000, name: 'product 7', categoryId: 2001 }, { id: 40001, name: 'product 8', categoryId: 2001 },
    ];


    private productsSubject = new BehaviorSubject<Product[]>(this.products);





    getProducts(categoryId: number): Observable<Product[]> {
        return this.productsSubject.asObservable()
            .map(p => p.filter(f => f.categoryId === categoryId));
    }

    getProduct(productId: number): Observable<Product> {
        return Observable.of(this.products.find(f => f.id === productId));
    }

    addProduct(product: Product) {
        this.products = [product, ...this.products];
        this.productsSubject.next(this.products);
    }
}

export interface Product {
    id: number;
    categoryId: number;
    name: string;
    price?: number;
    currency?: string;
    amount?: number;
    cost?: number;
    image?: string;
}