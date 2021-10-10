import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createForm: FormGroup;
  customerType: CustomerType[];
  constructor(private customerService: CustomerService, private cusType: CustomerTypeService, private route: Router) {
   this.createForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl(),
      gender: new FormControl(),
      code: new FormControl(),
    })
    this.cusType.getAll().subscribe(next => {
      this.customerType = next;
    })
  }

  ngOnInit(): void {
  }

  createCustomer() {
    this.customerService.createCus(this.createForm.value).subscribe(() => {
      // console.log(this.createForm.value);
      this.route.navigateByUrl("/customer");
    })
  }
}
