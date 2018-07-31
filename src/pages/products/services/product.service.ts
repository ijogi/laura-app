import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../interfaces/product";

@Injectable()
export class ProductService {
    private products: Product[] = [
        { id: 10000, name: 'product 1', categoryId: 1000 }, { id: 10001, name: 'product 2', categoryId: 1000 },
        { id: 20000, name: 'product 3', categoryId: 1001 }, { id: 20001, name: 'product 4', categoryId: 1001 },
        { id: 30000, name: 'product 5', categoryId: 2000 }, { id: 30001, name: 'product 6', categoryId: 2000 },
        { id: 40000, name: 'product 7', categoryId: 2001 }, { id: 40001, name: 'product 8', categoryId: 2001 },
    ];

    private productsSubject = new BehaviorSubject<Product[]>(this.products);
    private productSubject = new BehaviorSubject<Product>(null);

    getProducts(categoryId: number): Observable<Product[]> {
        return this.productsSubject.asObservable()
            .map(p => p.filter(f => f.categoryId === categoryId));
    }

    getProduct(productId: number): Observable<Product> {
        this.productSubject.next(this.products.find(f => f.id === productId));
        return this.productSubject.asObservable();
    }

    addProduct(product: Product) {
        this.products = [product, ...this.products];
        this.productsSubject.next(this.products);
        console.log("products: ", this.products);
    }

    updateProduct(product: Product) {
        const index = this.products.findIndex(f => f.id === product.id);
        let updatedProducts = this.products
        updatedProducts[index] = {...product};
        this.products = updatedProducts;
        this.productsSubject.next(this.products);
        this.productSubject.next(product);
    }

}
