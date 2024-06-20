import Product from "./ProductCard";

export default interface CartCard extends Product{
    description: string;
    quantity: number;
}