export default interface Product {
    id: string;
    title: string;
    description?: string;
    price: number;
    quantity?: number;
    images: string;
    colors: string;
    onsale: boolean;
    descuento:number;
    units:number
}