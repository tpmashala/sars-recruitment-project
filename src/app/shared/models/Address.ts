import { AddressType } from './AddressType';
export interface Address{
    addressLine1: string;
    addressLine2: string;
    surburb: string;
    city: string;
    postalCode: number;
    addressType: AddressType;
}