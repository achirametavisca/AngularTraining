import { ProductReview } from "./product-review";

export class Product {
    id:string;
    name:string;
    description:String;
    price:number;
    model:string;
    averageRatings:number;
    review:ProductReview;
}

