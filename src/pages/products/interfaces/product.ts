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
