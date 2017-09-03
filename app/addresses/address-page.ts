import { IAddress } from './address';

export interface AddressPage {
   totalPages: number,
  totalElements: number,
  number: number,
  numberOfElements: number,
  content: IAddress[]
}