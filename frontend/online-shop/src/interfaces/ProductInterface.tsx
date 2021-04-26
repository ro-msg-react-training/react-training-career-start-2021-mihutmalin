import { Category } from "./CategoryInterface";
import { Supplier } from "./SupplierInterface";

export interface Product {
  id: bigint;
  name: string;
  description: string;
  price: number;
  weight: number;
  category: Category;
  supplier: Supplier;
  imageUrl: string;
}
