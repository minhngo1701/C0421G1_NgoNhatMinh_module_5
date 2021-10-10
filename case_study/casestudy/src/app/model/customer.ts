import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  code: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  idCard: number;
  phone: number;
  email: string;
  address: string
  customerType: CustomerType;
}
