import { AddressDTO } from "./AddressDTO";
import { ProductIdAndQuantityDTO } from "./ProductIdAndQuantityDTO";

export interface InputDTO {
  createDate: Date;
  addressDTO: AddressDTO;
  products: ProductIdAndQuantityDTO[];
  customerId: number;
}
