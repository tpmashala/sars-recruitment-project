import { PhoneNumber } from './PhoneNumber';
import { Address } from "./Address";
import { SocialMedia } from "./SocialMedia";

export interface Employee{
	//employee_id: string;
	firstName: string;
	lastName: string;
	employeeNumber: string;
	emailAddress: string;
	phoneNumbers: Array<PhoneNumber>;
	addresses: Array<Address>;
	socialMedia: Array<SocialMedia>;
}