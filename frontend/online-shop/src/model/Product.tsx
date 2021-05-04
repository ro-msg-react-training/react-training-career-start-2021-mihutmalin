import { Category } from "./Category";
import { Supplier } from "./Supplier";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  productCategory: Category;
  supplier: Supplier;
  imageUrl: string;
}
