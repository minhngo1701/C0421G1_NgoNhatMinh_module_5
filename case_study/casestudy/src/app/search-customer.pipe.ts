import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "./model/customer";

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(customers: Customer[], searchValue: string): Customer[] {
    if (!customers || !searchValue) {
      return customers;
    }
    return customers.filter(data => {
      data.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.gender.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      data.customerType.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    });
  }

}
