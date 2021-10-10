import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  name: any;
  p: number = 1;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(next => {
      this.customers = next;
    })
  }


  search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.customers = this.customers.filter(data => {
        return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }
  //
  key: string = "id";
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
