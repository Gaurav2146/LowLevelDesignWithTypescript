import { Product } from "./product";

export class Shelf
{
    product:Product;
    code:number;
    isSold:boolean;

    constructor(product:Product,code:number)
    {
        this.product = product;
        this.code=code;
        this.isSold=false;
    }
    
}