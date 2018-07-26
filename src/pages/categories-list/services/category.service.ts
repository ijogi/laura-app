import { BehaviorSubject, Observable } from "rxjs";
import { Category } from "../interfaces/category";

export class CategoryService {
    
    private categories: Category[] = [
        { id: 1000, folderId: 999, name: 'choker' }, { id: 1001, folderId: 999, name: 'gem stone' },
        { id: 2000, folderId: 333, name: 'leather' }, { id: 2001, folderId: 333, name: 'gem stone' },
    ];

    private categoriesSubject = new BehaviorSubject<Category[]>(this.categories);

    getCategories(folderId: number): Observable<Category[]> {
        return this.categoriesSubject.asObservable()
            .map(c => c.filter(f => f.folderId === folderId));
    }
    
    addCategory(category: Category) {
        this.categories = [category, ...this.categories];
        this.categoriesSubject.next(this.categories);
    }
}
